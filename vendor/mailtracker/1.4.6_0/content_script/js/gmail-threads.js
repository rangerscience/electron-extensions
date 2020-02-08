GmailThreads = {
    addIcons: function(sdk, token) {
        _this = this;

        // 1. We get all the IDs of the threads on the view
        _this.threadIds = new Array();
        _this.threadRowViews = new Array();
        sdk.Lists.registerThreadRowViewHandler(function(threadRowView) {
            _this.threadIds.push(threadRowView.getThreadID());
            _this.threadRowViews.push(threadRowView);
        });

        // 2. Every 1 second we fetch all the last IDs detected and integrate the buttons
        setInterval(function() {
            if (_this.threadIds.length) {
                var threadIds = _this.threadIds;
                var threadRowViews = _this.threadRowViews;
                _this.threadIds = [];
                _this.threadRowViews = [];

                $.getJSON(hunter_domain + "/message_status?token=" + token + "&thread_id=" + threadIds.join(","), function(response) {
                    threadRowViews.forEach(function(threadRowView) {
                        emails = response.data.messages.filter(o => o.thread_id === threadRowView.getThreadID());
                        last_email = emails.sortBy(function(o) {
                            return o.sent_at
                        }).reverse()[0];

                        var iconUrl = _this.iconDisplayed(last_email);
                        var statusInWords = _this.statusDisplayed(last_email, emails.length);

                        var button = {
                            iconUrl: iconUrl,
                            hasDropdown: true,
                            title: "MailTracker",
                            onClick: function(event) {
                                // We have to redefine these variables inside the function since it can be called later
                                emails = response.data.messages.filter(o => o.thread_id === threadRowView.getThreadID());
                                last_email = emails.sortBy(function(o) {
                                    return o.sent_at
                                }).reverse()[0];
                                details_dom = "";

                                event.dropdown.el.innerHTML = "\n\
                  <div class='hunter_status_dropdown' id='hunter_status_" + token + "'>\n\
                    <div class='hunter_status_title'>" + statusInWords + "</div>\n\
                    <div class='hunter_status_details'></div>\n\
                  </div>";

                                if (emails.length > 0) {
                                    last_email.pixels_viewed.sortBy(function(o) {
                                        return o.time
                                    }).reverse();
                                    pixels_viewed = last_email.pixels_viewed.slice(0, 5);

                                    _.each(pixels_viewed, function(pixel_viewed) {
                                        $("#hunter_status_" + token + " .hunter_status_details").append("\n\
                      <p>\n\
                        <span class='hunter_status_device'>" + _this.deviceDisplayed(pixel_viewed) + "</span>\n\
                        <span class='hunter_status_time'>" + capitalize(moment(pixel_viewed.time).fromNow()) + "</span>\n\
                      </p>");
                                    });
                                }

                                if ($("#hunter_status_" + token + " .hunter_status_details").text() == "") {
                                    $("#hunter_status_" + token + " .hunter_status_details").remove();
                                }
                            }
                        };

                        // We integrated the buttons
                        threadRowView.addButton(button);
                    });
                });
            }
        }, 500);


        // We open the popover on hover (the hover tiggers the click method)
        // setInterval() is used to be sure this event is declared when the icons are
        // correctly integrated.
        //
        var intervalButtonThreadAction = setInterval(function() {
            if ($(".inboxsdk__thread_row .inboxsdk__button_icon").length) {
                $(".inboxsdk__thread_row .inboxsdk__button_icon").mouseenter(function() {
                    this_icon = $(this)
                    this_icon_path = $(this).find("img").attr("src")

                    if (!$(".hunter_status_dropdown").length && this_icon_path.indexOf("mailtracker_icon_") != -1) {
                        this_icon.parent().click();
                    }
                }).mouseleave(function() {
                    this_icon = $(this)
                    this_icon_path = $(this).find("img").attr("src")

                    if ($(".hunter_status_dropdown").length && this_icon_path.indexOf("mailtracker_icon_") != -1) {
                        this_icon.parent().click();
                    }
                });
            }
        }, 100);
    },

    statusDisplayed: function(data, emails_sent_number) {
        if (typeof data !== "undefined" && typeof data.pixels_viewed !== "undefined") {
            switch (data.pixels_viewed.length) {
                case 1:
                    openedNumber = "one time";
                    break;
                default:
                    openedNumber = data.pixels_viewed.length + " times";
            }
        }
        if (emails_sent_number > 1) {
            noun = "Last email";
        } else {
            noun = "Email";
        }

        if (typeof data !== "undefined") {
            switch (data.status) {
                case "not_tracked":
                    return noun + " not tracked";
                case "tracked":
                    return noun + " tracked but not opened yet";
                case "opened":
                    return noun + " opened " + openedNumber;
                case "clicked":
                    return noun + " opened " + openedNumber + " and clicked";
                default:
                    return "";
            }
        } else {
            return "Nothing tracked";
        }
    },

    iconDisplayed: function(last_email) {
        if ($("head").data("inboxsdkUsingMaterialUi") == true) {
            if (typeof last_email == "undefined") {
                return chrome.runtime.getURL('shared/img/mailtracker_icon_light_grey.png');
            }
            if (last_email.status == "opened" || last_email.status == "clicked") {
                return chrome.runtime.getURL('shared/img/mailtracker_icon_green.png');
            } else {
                return chrome.runtime.getURL('shared/img/mailtracker_icon_black.png');
            }
        } else {
            if (typeof last_email == "undefined") {
                return chrome.runtime.getURL('shared/img/mailtracker_icon_light_grey.png');
            }
            if (last_email.status == "opened" || last_email.status == "clicked") {
                return chrome.runtime.getURL('shared/img/mailtracker_icon_green.png');
            } else {
                return chrome.runtime.getURL('shared/img/mailtracker_icon_grey.png');
            }
        }
    },

    deviceDisplayed: function(pixel_viewed) {
        var md = new MobileDetect(pixel_viewed.user_agent);
        if (md.mobile() != null) {
            return "<i class='fa fa-mobile'></i>"
        } else if (md.tablet() != null) {
            return "<i class='fa fa-tablet'></i>"
        } else {
            return "<i class='fa fa-desktop'></i>"
        }
    }
}