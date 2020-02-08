var Account = {
    // Search if there isn't any account with this email already saved and create it
    // if not. The token is null untile the Google account is connected.
    //
    createAccountEntry: function(email, fn) {
        chrome.storage.sync.get({
            "accounts": []
        }, function(value) {
            accounts = value.accounts.filter(a => a.email == email);

            if (accounts.length == 0) {
                value.accounts.push({
                    email: email,
                    token: null,
                    activated: true,
                    google_connect_wait_until: 0
                });
                chrome.storage.sync.set({
                    "accounts": value.accounts
                }, function() {
                    fn()
                });
            } else {
                fn()
            }
        });
    },

    // Modify any attribute of the account defined by its email address.
    //
    editAccountAttribute: function(email, attribute, data) {
        chrome.storage.sync.get({
            "accounts": []
        }, function(value) {
            account = value.accounts.filter(a => a.email == email)[0];

            // We remove the entry
            value.accounts.splice(value.accounts.findIndex(a => a.email == email), 1);

            // We modify the value
            account[attribute] = data;

            // We add the account back to the list
            value.accounts.push(account);

            // We save the list
            chrome.storage.sync.set({
                "accounts": value.accounts
            });
        });
    },

    // Get account data from its email address. If there is no account, it returns null.
    //
    getAccountData: function(email, fn) {
        chrome.storage.sync.get({
            "accounts": []
        }, function(value) {
            account = value.accounts.filter(a => a.email == email)[0];

            if (typeof account == "undefined") {
                account = null
            }

            fn(account);
        });
    }
}