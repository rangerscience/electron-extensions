var SiteFeedbackDialog = function(e) {
    Dialog.call(this, e, {
        overlayDialog: !1,
        hidePreviousDialog: !0
    })
};
SiteFeedbackDialog.prototype = Object.create(Dialog.prototype), (SiteFeedbackDialog.prototype.constructor = SiteFeedbackDialog).prototype.initialize = function(e) {
    Dialog.prototype.initialize.apply(this, arguments),
        function(e) {
            $("#sendFeedbackButton").unbind("click"), $("#submitConfirmation").hide();
            var t = $("#currentSiteHeader").text(),
                a, l, i;
            bg.get_selected_tab_data(null, function(e) {
                l = bg.lp_gettld_url(e.url), $("#currentSiteHeader").text(t + " " + l)
            });
            var n = $("div #whatActuallyHappened").find("select");
            n.change(function() {
                var e = n.filter(":visible")[0],
                    t = {
                        Issue: i = e.options[e.selectedIndex].value
                    };
                bg.LPModule.callService("Segment", "sendTypedEvent", ["FeedbackIssueClicked", t], function(e) {
                    e && console.error(e)
                })
            }), $("#goalSelect").change(function() {
                var e = {
                    Goal: a = $("#goalSelect option:selected").val()
                };
                bg.LPModule.callService("Segment", "sendTypedEvent", ["FeedbackGoalClicked", e], function(e) {
                    e && console.error(e)
                }), $("#fill").attr("disabled", !1), $.each($("#whatActuallyHappened > select"), function(e, t) {
                    $(t).attr("hidden", $("#goalSelect").val() != t.id), $(t.id + "Label").attr("hidden", $("#goalSelect").val() != t.id), $("#goalSelect").val() != t.id ? $(t).val("none") : $.noop()
                }), $("#whatActuallyHappened").attr("hidden", "other" == $("#goalSelect").val()), "other" == $("#goalSelect").val() ? $("#optionalLabel").addClass("hide") : $("#optionalLabel").removeClass("hide")
            }), $("select").change(function() {
                $("#feedbackText").attr("disabled", !("other" == $("#goalSelect").val() || e.isIssueSelected())), e.clearValidation()
            }), $("#feedbackText").focus(function() {
                e.clearValidation()
            }), $("#sendFeedbackButton").click(function() {
                e.isValid() && e.sendEvent(l, a, i)
            }), $("#resetPageButton").click(function() {
                e.resetPage()
            })
        }(this)
}, SiteFeedbackDialog.prototype.isIssueSelected = function() {
    return "none" != $("#fill").val() || "none" != $("#save").val() || "none" != $("#update").val()
}, SiteFeedbackDialog.prototype.resetPage = function() {
    $("#submitConfirmation").hide(), $("#mainView").show(), $("select").val("none"), $("#whatActuallyHappened").attr("hidden", !1), $("#whatActuallyHappened > select").attr("hidden", !0), $("#fill").attr("hidden", !1), $("#fill").attr("disabled", !0), $("#feedbackText").attr("disabled", !0), $("#optionalLabel").removeClass("hide"), $("#feedbackText").val(""), this.clearValidation()
}, SiteFeedbackDialog.prototype.clearValidation = function() {
    $(".warningBorder").removeClass("warningBorder"), $("#feedbackTextCaption").removeClass("warningText"), $(".warningText").attr("hidden", !0)
}, SiteFeedbackDialog.prototype.sendEvent = function(e, t, a) {
    var l, i = {
        Domain: e,
        Goal: t,
        Issue: a,
        Description: $("#feedbackText").val()
    };
    bg.LPModule.callService("Segment", "sendTypedEvent", ["FeedbackSent", i], function(e) {
        e && console.error(e)
    }), $("#mainView").hide(), $("#submitConfirmation").show()
}, SiteFeedbackDialog.prototype.isValid = function() {
    if ("other" == $("#goalSelect").val() && "" == $("#feedbackText").val()) return $("#feedbackText").addClass("warningBorder"), $("#feedbackTextCaption").addClass("warningText"), !1;
    if ("none" == $("#goalSelect").val()) return $("#goalSelect").addClass("warningBorder"), $("#goalSelectWarning").attr("hidden", !1), !1;
    var e = $("#" + $("#goalSelect").val());
    return "none" != e.val() || (e.addClass("warningBorder"), $("#issueSelectWarning").attr("hidden", !1), !1)
};
//# sourceMappingURL=sourcemaps/siteFeedbackDialog.js.map