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

const d = new Date();
var hours = d.getHours();

function confirmExitGithub() {
    var confirmResultExit = confirm("You are leaving this website to go to a secure and safe website. However, other user-generated content is not managed by Peter Go. Would you still like to initiate a redirect?")
    if (confirmResultExit) {
        window.location.href = "https://github.com/petergo7/petergo.github.io";
    }
}

function confirmExitCustom1() {
    var confirmResultExitJFocus = confirm("This redirect may not succeed, or bring you to a 404 page error. Upon the fact that the redirect does suceed, you will be directed to a developer view. The page in request is currently being worked on, and is NOT the finished product. Would you still like to redirect?")
    if (confirmResultExitJFocus) {
        window.location.href = "https://petergo7.github.io/petergo.github.io/JFocus/JFocus5/JFocus5.html";
    }
}