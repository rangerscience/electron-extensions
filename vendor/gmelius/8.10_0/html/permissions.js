chrome.permissions.contains({
    origins: ['https://gml.email/*', 'https://mail.google.com/*', 'https://gmelius.io/*']
}, function(result) {
    if (result) {
        document.querySelector('#gml_permission').style = 'display:none;'
        window.open('https://gmelius.io/account', '_blank')
    }
})

document.querySelector('#dashboard').addEventListener('click', function(event) {
    window.open('https://gmelius.io/account', '_blank')
})
document.querySelector('#gml_permission').addEventListener('click', function(event) {
    chrome.permissions.request({
        origins: ['https://gml.email/*', 'https://mail.google.com/*', 'https://gmelius.io/*']
    }, function(granted) {
        window.open('https://gmelius.io/account', '_blank')
    })
})