const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

document.getElementById('mod').innerHTML="mod:estudar"


let timeLeft = 1500;
let isRunning = false;
let interval;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(interval);
                isRunning = false;
                alert('Pomodoro concluído! Hora de fazer uma pausa.');
                document.getElementById('mod').innerHTML="mod:descansar"

                
                
            }
        }, 1000);
    }
}

startButton.addEventListener('click', startTimer);

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
    timeLeft = 1500;
    updateTimer();
});
