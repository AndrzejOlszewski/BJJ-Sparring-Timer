let timeLeft = 300;
let timer;
let timerRunning = false;


function startTimer() {

    if (timerRunning) {
        return;
    }

    timerRunning = true;

    timer = setInterval(function() {

        timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("timer").innerHTML =
        minutes + ":" + seconds;


        if (timeLeft <= 0) {
            clearInterval(timer);
            timerRunning = false;
            alert("ROUND OVER!");
        }

    }, 1000);

}


function pauseTimer() {

    clearInterval(timer);
    timerRunning = false;

}


function resetTimer() {

    clearInterval(timer);

    timerRunning = false;

    timeLeft = 300;

    document.getElementById("timer").innerHTML = "05:00";

}