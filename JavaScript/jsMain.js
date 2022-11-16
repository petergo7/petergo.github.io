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

const d = new Date();
let hours = d.getHours();

if (hours < 5) {
    document.getElementById("header").innerHTML = "Good Morning early bird, and Welcome Back!"
} else if (hours < 12) {
    document.getElementById("header").innerHTML = "Good Morning, and Welcome Back!"
} else if (hours < 23) {
    document.getElementById("header").innerHTML = "Good Afternoon, and Welcome Back!"
} else {
    document.getElementById("header").innerHTML = "Good Night, and Welcome Back!"
}