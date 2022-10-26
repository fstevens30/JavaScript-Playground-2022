//When the function runs update the progress bar to the inputted number

function updateProgress() {
    var progressBar = document.getElementById('progressBar'); // Select the progress bar
    // Set a variable to the inputted number
    var progress = document.getElementById('progress').value;
    // Set the progress bar to the inputted number
    progressBar.value = progress;
}