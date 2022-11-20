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

var clickedNotHappy = 0;


function dismissHappy() {

    alert("You can't dismiss my birthday! It's MY birthday. And it's going to be like that for today. 😤");


    clickedNotHappy = clickedNotHappy + 1;

    if (clickedNotHappy >= 10) {

        alert("AYYY! STOP PRESSING THIS BUTTON! It's not going to do anything, and it's MY BIRTHDAY! You hear me? It's my BIRTHDAY!!! 🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳");

        clickedNotHappy = 0
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