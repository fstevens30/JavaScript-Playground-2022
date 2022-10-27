let progressBar = document.getElementById('progressBar'); // Select the progress bar
// Set a variable to the inputted number
let progress = document.getElementById('progress').value;
// Set the progress bar to the inputted number

//When the function runs update the progress bar to the inputted number

function updateProgress() {
    progressBar.value = progress;
}

//Switch case for changing the bar colour when the value is different.

switch (progress) {
    case 0:
        document.documentElement.style.setProperty('--progress-color', 'green');
        break;
    case 250:
        document.documentElement.style.setProperty('--progress-color', 'yellow');
        break;
    case 500:
        document.documentElement.style.setProperty('--progress-color', 'orange');
        break;
    case 750:
        document.documentElement.style.setProperty('--progress-color', 'red');
        break;
    default:
        document.documentElement.style.setProperty('--progress-color', 'green');
        break;
}