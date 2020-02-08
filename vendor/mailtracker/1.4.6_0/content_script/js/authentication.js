function extractAuthentication() {
    account = JSON.parse(document.getElementById("google_account_info").innerHTML);

    Account.createAccountEntry(account.email.toLowerCase(), function() {
        Account.editAccountAttribute(account.email.toLowerCase(), "token", account.token);
    });

    chrome.storage.sync.set({
        "is_hunter_user": account.is_hunter_user
    }, function() {
        // The user has an account on Hunter
    });
}

if (location.protocol + '//' + location.host + location.pathname == hunter_domain + "/messages") {
    extractAuthentication();
}