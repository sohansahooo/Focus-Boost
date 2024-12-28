document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startPomodoro');
    const pauseButton = document.getElementById('pausePomodoro');
    const resetButton = document.getElementById('resetPomodoro');
    const timerDisplay = document.getElementById('timer');
    const workDurationInput = document.getElementById('workDuration');
    
    let timerInterval = null;
    let timeLeft = 25 * 60; // 25 minutes default

    function updateTimerDisplay(minutes, seconds) {
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startTimer() {
        if (timerInterval) return;
        
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                playAlarm();
                return;
            }
            
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            updateTimerDisplay(minutes, seconds);
        }, 1000);
    }

    workDurationInput.addEventListener('input', function() {
        const newValue = parseInt(this.value);
        timeLeft = newValue * 60;
        updateTimerDisplay(Math.floor(timeLeft / 60), 0);
    });

    startButton.addEventListener('click', startTimer);

    pauseButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    resetButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        timeLeft = parseInt(workDurationInput.value) * 60;
        updateTimerDisplay(Math.floor(timeLeft / 60), 0);
    });
}); 