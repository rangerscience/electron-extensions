GmailCompose = {
    addButton: function(sdk, token) {

        // We prepare to edit the email when the user send it
        this.trackEmail(sdk, token);

        // This buttons enables or disables the tracking
        sdk.Compose.registerComposeViewHandler(function(composeView) {

            let hoistedEmitter;
            let isClicked = true;

            const getButtonDescriptor = (clicked) => ({
                title: clicked ? "Tracking is currently on" : "Tracking is currently off",
                iconUrl: clicked ? chrome.runtime.getURL("shared/img/mailtracker_icon_green.png") : chrome.runtime.getURL("shared/img/mailtracker_icon_black.png"),
                onClick: handleClick
            });

            window.hunter_tracking_activated = isClicked;

            const handleClick = (event) => {
                isClicked = !isClicked;
                hoistedEmitter.emit(getButtonDescriptor(isClicked));
                window.hunter_tracking_activated = isClicked;
            };

            const descriptorStream = Kefir.stream((emitter) => {
                hoistedEmitter = emitter;
                emitter.emit(getButtonDescriptor(isClicked));
            });

            composeView.addButton(descriptorStream);
        });
    },

    trackEmail: function(sdk, token) {
        sdk.Compose.registerComposeViewHandler(function(composeView) {
            randomID = generateRandomID();

            composeView.on("presending", function(event) {

                // If the user doesn't want the email to be tracked, we do nothing.
                if (window.hunter_tracking_activated == true) {
                    messageHTML = this.getBodyElement();
                    messageHTMLString = messageHTML.innerHTML;

                    // Finally, we add a one-pixel image that will be called when the email is opened.
                    this.setBodyHTML(messageHTMLString + "<img src='https://pxl-mailtracker.com/pixel/" + randomID + "?rid=" + randomID + "' width='1' height='1' border='0' />");
                }
            });

            composeView.on("sent", function(event) {
                if (window.hunter_tracking_activated == true) {
                    event.getThreadID().then((thread_id) => {
                        event.getMessageID().then((message_id) => {
                            chrome.storage.sync.get({
                                "last_message_id": ""
                            }, function(value) {
                                // We make sure the event is sent only once
                                if (value.last_message_id != message_id) {
                                    $.ajax({
                                        type: "POST",
                                        url: hunter_domain + "/messages_sent",
                                        data: {
                                            thread_id: thread_id,
                                            message_id: message_id,
                                            token: token,
                                            tracking_id: randomID
                                        },
                                        dataType: "JSON"
                                    });
                                }
                            });

                            countUsage();
                            chrome.storage.sync.set({
                                "last_tracked_email_date": Date.now()
                            });
                            chrome.storage.sync.set({
                                "last_message_id": message_id
                            });
                        });
                    });
                }
            });
        });
    }
}