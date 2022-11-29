function calculateBMI() {
    var confimCalc = confirm("This process calculates your BMI and gives results based upon user input. No user data is stored permenantly, sent to a server for processing, or is viewed by others. This procedure gives a loose medical result, however, seek medical assistance if needed. This procedure is also not meant for accurate self-diagnosis. Click OK to proceed.");
    console.log("Hello World!")
    
    if (confimCalc) {
        console.log("Confirmed.")
    }

    var weight = prompt("What is your weight?", "Enter your weight here followed by lbs or kgs.")

    

};