function calculateBMI() {

    /* 
    var confimCalc = confirm("This process calculates your BMI and gives results based upon user input. No user data is stored permenantly, sent to a server for processing, or is viewed by others. This procedure gives a loose medical result, however, seek medical assistance if needed. This procedure is also not meant for accurate self-diagnosis. Click OK to proceed.");
    console.log("Check: User Confirmation Alerted.")
    console.log("Check: Update Alt 1.")

    
    if (confimCalc) {
        console.log("Check: User Confirmed.")
    }

    var weight = prompt("What is your weight?", "94.80 kgs");
    console.log(weight);

    //var height = prompt("What is your height?", "Enter your height here.");

    var acceptableNumberArrayInD = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

    var checkWeight = weight.charAt(0);

    validWeight = acceptableNumberArrayInD.includes(checkWeight);
    console.log(validWeight); // makes true
    
    for (var rotation = 0; validWeight = "true";) {
        console.log("---------------STARTUP REPORT---------------");
        console.log("Automatical Cycle = " + rotation);
        checkTextNumber = weight.charAt(rotation);
        console.log("Check: (Checking Number Value) " + checkTextNumber);
        validNumber = acceptableNumberArrayInD.includes(checkTextNumber);
        console.log("Check: (Valid Number Value 1 Non-conditional) " + validNumber);

        if (validNumber = "true") {
            rotation ++
        } 

        if (validNumber = "false") {
            console.log("----------------BREAK REPORT----------------");
            console.log("Automatical Cycle = " + (rotation - 1));
            console.log("Check: (Checking Number Value) " + checkTextNumber);
            console.log("Check: (Valid Number Value 2 Conditional) " + validNumber);
            var splitText = rotation;
            console.log("Check: (Split Text Pos Value) " + splitText);
            console.log("Check/Update: Break Triggered, For Loop Paused");
            break;
        }

    }
    */

    var weightIn = prompt("Enter Weight", "94.80 kgs");
    var acceptableNumberArrayInD = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    var weightValidCheck = acceptableNumberArrayInD.includes(weightIn.charAt(0));
    if (weightValidCheck = true) {
        console.log("Checkpoint 1 = OK");
    } else {
        console.log("Checkpoint 1 = DT");
    }
    var rotation = 0;

    if (weightValidCheck = true) {
        for (;;) {
            var checkingCharAt = weightIn.charAt(rotation);
            if (acceptableNumberArrayInD.includes(checkingCharAt) = true) {
                var rotation = rotation + 1;
            } else {
                break;
            }
        }
    }
};

function calculateBMISimple() {
    confirm("This process calculates your BMI and gives results based upon user input. No user data is stored permenantly, sent to a server for processing, or is viewed by others. This procedure gives a loose medical result, however, seek medical assistance if needed. This procedure is also not meant for accurate self-diagnosis. Click OK to proceed. DEV.PU2");
    console.log("Check: User Confirmation Alerted.")
    console.log("Check: Update Alt 1.")
    var weight = prompt("Enter your weight for calculations in kgs.", "50");
    var height = prompt("Enter your height for calculations in cm.", "170");

    var weightInt = parseInt(weight);
    var heightInt = parseInt(height);
    
    var calcWI = weightInt;
    var calcHI = heightInt/100;

    var BMI = calcWI/(calcHI*calcHI);

    if (BMI < 18.5) {
        var BMIFeedback = "you are within the underweight range!";
    } else if (BMI < 24.9) {
        var BMIFeedback = "you are within the normal weight range!";
    } else if (BMI < 29.9) {
        var BMIFeedback = "you are within the overweight range!";
    } else if (BMI < 35) {
        var BMIFeedback = "you are within the obese range!";
    } else if (BMI > 35) {
        var BMIFeedback = "you are within the extreme obesity range!";
    }

    var BMI = Math.round((BMI + Number.EPSILON) * 100) / 100

    confirm("Your BMI was " + BMI + " and " + BMIFeedback);

}