function dismissAlert() {
    var alert = document.getElementById('maintinenceAlert');
    var alertButton = document.getElementById('maintinenceAlertButton');

    var displaySetting = alert.style.display;

    if (displaySetting == "block") {
        alert.style.display = "none"
        alertButton.innerHTML = "Show"
    }
    else {
        alert.style.display = "block"
        alertButton.innerHTML = "Dismiss"
    }

}

/*
function dismissLog() {
    var log = document.getElementById('changeLog');
    var logButton = document.getElementById('changeLogButton');

    var displaySetting = log.style.display;

    if (displaySetting == "block") {
        log.style.display = "none"
        logButton.innerHTML = "Show"
    }
    else {
        log.style.display = "block"
        logButton.innerHTML = "Dismiss"
    }

}
*/