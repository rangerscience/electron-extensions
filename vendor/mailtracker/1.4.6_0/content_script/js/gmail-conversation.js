GmailConversation = {
    addSideInformation: function(sdk, token) {
        var _this = this;

        sdk.Conversations.registerThreadViewHandler(function(threadView) {
            var mailTrackerSideBar = document.createElement("div");
            mailTrackerSideBar.setAttribute("id", "hunter_conversation_sidebar");
            const sidebar = threadView.addSidebarContentPanel({
                el: mailTrackerSideBar,
                title: "MailTracker",
                iconUrl: chrome.runtime.getURL('shared/img/mailtracker_icon_green.png')
            });

            sidebar.once('activate', () => {
                threadView.getThreadIDAsync().then(id => {
                    _this.addContent(id, token);
                    _this.preventAutoTrack(id, token);
                }).catch(e => {
                    console.warn(e);
                });
            });
        })
    },

    addContent: function(threadId, token) {
        var _this = this;

        $("#hunter_conversation_sidebar").html('\n\
      <div id="hunter_conversation_header">\n\
        <img src="' + chrome.runtime.getURL('shared/img/mailtracker_logo.png') + '" />\n\
      </div>\n\
      <div id="hunter_conversation_status">\n\
        <span class="hunter_conversation_blank_status">Loading MailTracker...</span>\n\
      </div>\n\
      <div id="hunter_conversation_opens_title" class="hunter_conversation_subtitle">Last opens</div>\n\
      <div id="hunter_conversation_opens" class="hunter_conversation_history"></div>\n\
      <div id="hunter_conversation_opens_more">More <i class="fa fa-caret-down"></i></div>\n\
      <div id="hunter_conversation_clicks_title" class="hunter_conversation_subtitle">Last clicks</div>\n\
      <div id="hunter_conversation_clicks" class="hunter_conversation_history"></div>\n\
      <div id="hunter_conversation_clicks_more">More <i class="fa fa-caret-down"></i></div>\n\
    ');

        $.getJSON(hunter_domain + "/message_status?token=" + token + "&thread_id=" + threadId, function(data) {
            if (data.data.messages.length > 0) {

                // Select the last email
                data.data.messages.sortBy(function(o) {
                    return o.sent_at
                }).reverse();
                last_email = data.data.messages[0];

                // Display the main status of the last email
                var statusInWords = _this.statusDisplayed(last_email, data.data.messages.length);
                $("#hunter_conversation_status").html(statusInWords);

                // Display the subtitles if there are clicks
                if (last_email.links_clicked.length > 0) {
                    $(".hunter_conversation_subtitle").show();
                }

                // Display the last opens
                last_email.pixels_viewed.sortBy(function(o) {
                    return o.time
                }).reverse();
                _.each(last_email.pixels_viewed, function(pixel_viewed) {
                    device = _this.deviceDisplayed(pixel_viewed);
                    $("#hunter_conversation_opens").append("\n\
            <p class='hunter_conversation_open'>\n\
              <span class='hunter_conversation_device'>" + device + "</span>\n\
              <span class='hunter_conversation_time'>" + capitalize(moment(pixel_viewed.time).fromNow()) + "<span class='hunter_conversation_time_precise'>" + moment(pixel_viewed.time).format('MMMM Do YYYY, h:mm:ss a') + "</span></span>\n\
            </p>");
                });

                // Deploy more results of opens
                if (last_email.pixels_viewed.length > 5) {
                    $("#hunter_conversation_opens_more").show()
                }

                $("#hunter_conversation_opens_more").on("click", function() {
                    if ($(".hunter_conversation_open:hidden").length) {
                        $(".hunter_conversation_open").show();
                        $(this).html("Less <i class='fa fa-caret-up'></i>")
                    } else {
                        $(".hunter_conversation_open:nth-child(n+6)").hide()
                        $(this).html("More <i class='fa fa-caret-down'></i>")
                    }
                });

                // Deploy more results of clicks
                if (last_email.links_clicked.length > 5) {
                    $("#hunter_conversation_clicks_more").show()
                }

                $("#hunter_conversation_clicks_more").on("click", function() {
                    if ($(".hunter_conversation_click:hidden").length) {
                        $(".hunter_conversation_click").show();
                        $(this).html("Less <i class='fa fa-caret-up'></i>")
                    } else {
                        $(".hunter_conversation_click:nth-child(n+6)").hide()
                        $(this).html("More <i class='fa fa-caret-down'></i>")
                    }
                });
            } else {
                $("#hunter_conversation_status").html("No email tracked in this conversation.");
            }
        });
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
    },

    statusDisplayed: function(data, emails_sent_number) {
        if (typeof data.pixels_viewed !== "undefined") {
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

        switch (data.status) {
            case "not_tracked":
                return noun + " not tracked.";
            case "tracked":
                return noun + " tracked but not opened yet.";
            case "opened":
                return noun + " opened " + openedNumber;
            case "clicked":
                return noun + " opened " + openedNumber + " and clicked";
            default:
                return "";
        }
    },

    preventAutoTrack: function(threadId, token) {
        $.getJSON("https://mailtracker.hunter.io/ignore_opens?token=" + token + "&thread_id=" + threadId, function(data) {
            // The URL is pinged to indicate we don't want to save tracking here (auto tracking)
        });
    }
}