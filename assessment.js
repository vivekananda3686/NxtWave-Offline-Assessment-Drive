let timer = document.getElementById('display-timer');
timer.textContent = "25:00";

let interval;
let totalTime = 25 * 60;

function updateDisplay(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    clearInterval(interval);
    interval = setInterval(() => {
        if (totalTime > 0) {
            totalTime--;
            updateDisplay(totalTime);
        } else {
            clearInterval(interval);
            alert("Time's up!");
        }
    }, 1000);
}

function timerStarts() {
    clearInterval(interval);
    totalTime = 10 * 60;
    updateDisplay(totalTime);
    startTimer()
}

function timerStops() {
    clearInterval(interval);
}

function timerResets() {
    clearInterval(interval);
    totalTime = 25 * 60;
    updateDisplay(totalTime);
    startTimer()
}

function timerShortBreaking() {
    clearInterval(interval);
    totalTime = 5 * 60;
    updateDisplay(totalTime);
    startTimer()
}

function timerLongBreaking() {
    clearInterval(interval);
    totalTime = 15 * 60;
    updateDisplay(totalTime);
    startTimer()
}

document.getElementById('starting-button').onclick = timerStarts;
document.getElementById('stopping-button').onclick = timerStops;
document.getElementById('reseting-button').onclick = timerResets;
document.getElementById('shortbreaking-button').onclick = timerShortBreaking;
document.getElementById('longbreaking-button').onclick = timerLongBreaking;

startTimer()
