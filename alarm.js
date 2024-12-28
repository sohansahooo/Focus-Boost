let alarmAudio = null;

function playAlarm() {
    if (alarmAudio) {
        stopAlarm();
    }
    
    alarmAudio = new Audio(chrome.runtime.getURL('alarm.mp3'));
    alarmAudio.volume = 1.0;
    alarmAudio.loop = true;
    
    alarmAudio.play()
        .then(() => {
            showAlarmModal();
        })
        .catch(error => {
            console.error('Error playing alarm:', error);
        });
}

function stopAlarm() {
    if (alarmAudio) {
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
        alarmAudio = null;
    }
}

function showAlarmModal() {
    let modal = document.getElementById('alarmModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'alarmModal';
        modal.innerHTML = `
            <div class="alarm-modal">
                <h3>Time's Up!</h3>
                <p>Your work session is complete!</p>
                <button id="stopAlarmBtn" class="primary-button">Stop Alarm</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const stopButton = document.getElementById('stopAlarmBtn');
    if (stopButton) {
        stopButton.onclick = () => {
            stopAlarm();
            modal.style.display = 'none';
        };
    }
    
    modal.style.display = 'block';
} 