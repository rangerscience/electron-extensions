// Load the connected accounts
//
chrome.storage.sync.get({
    "accounts": []
}, function(value) {
    if (value.accounts.length > 0) {
        document.getElementById("accounts-list-notification").style.display = "block";
        document.getElementById("accounts-link").style.display = "block";

        chrome.storage.sync.get({
            "is_hunter_user": false
        }, function(value) {
            if (value.is_hunter_user) {
                document.getElementById("cta-campaigns").style.display = "block";
            } else {
                document.getElementById("cta-chrome").style.display = "block";
            }
        });

        value.accounts.forEach(account => {
            if (account.activated) {
                active = "active"
            } else {
                active = ""
            }

            if (account.token == null) {
                document.getElementById("accounts-list-notification").innerHTML += "<p>\n\
          <a class='connect-link' href='https://mailtracker.hunter.io/get-started?utm_source=mailtracker_chrome_extension&utm_medium=extension&utm_campaign=extension&utm_content=browser_popup' target='_blank'>Connect</a>\n\
          <strong class='email'>" + account.email + "</strong>\n\
        </p>";
            } else {
                document.getElementById("accounts-list-notification").innerHTML += "<p>\n\
          <span class='notifications-switcher " + active + "' data-email='" + account.email + "'>\n\
            <span class='notifications-selector'></span>\n\
          </span>\n\
          <strong class='email'>" + account.email + "</strong>\n\
        </p>";
            }

            Array.from(document.getElementsByClassName("notifications-switcher")).forEach(switcher => {
                switcher.addEventListener('click', function(event) {
                    switcher.classList.toggle("active");
                    toggleActiveAccount(switcher.dataset.email)
                });
            });
        });
    } else {
        document.getElementById("no-account-notification").style.display = "block";
    }
});


function toggleActiveAccount(email) {
    Account.getAccountData(email, function(account) {
        Account.editAccountAttribute(email, "activated", !account.activated)
    });
}