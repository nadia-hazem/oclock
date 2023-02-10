///////////////
// MINUTEUR //
/////////////
// Réaliser un minuteur. Il doit être possible d’augmenter le temps du minuteur grâce à des flèches, ou de rentrer un “temps” grâce à un input. Un seul bouton pour start/stop le minuteur. Lorsque le minuteur arrive à zéro, un message apparaît et indique que le temps est écoulé. Il faut pouvoir réinitialiser le minuteur.

document.addEventListener('DOMContentLoaded', function () {
    const ringtone = new Audio("/oclock/assets/audio/alarm-clock.mp3");
    // Déclaration des variables 
    let timer = document.querySelector('#timer'); 
    timer.innerText = '00:00:00';
    let startStopButton = document.querySelector('#startStopButton');
    let isTimerRunning = false;
    let hour = document.querySelector('#inputHour');
    let minute = document.querySelector('#inputMinute');
    let second = document.querySelector('#inputSecond');
    let resetButton = document.querySelector('#resetButton');
    let popup = document.querySelector('#popup');
    popup.style.display = 'none';
    let popCloseBtn = document.querySelector('#popCloseBtn');
    let interval;

    function startTimer() {
        isTimerRunning = true;
        startStopButton.innerHTML = 'Stop';
        interval = setInterval(function() {
            if (second.value > 0) {
                second.value--;
            } else if (minute.value > 0) {
                minute.value--;
                second.value = 59;
            } else if (hour.value > 0) {
                hour.value--;
                minute.value = 59;
                second.value = 59;
            } else {
                popup.style.display = 'block';
                ringtone.play();
                stopTimer();
            }
            timer.innerHTML = hour.value.toString().padStart(2, '0') + ':' + minute.value.toString().padStart(2, '0') + ':' + second.value.toString().padStart(2, '0');
        }, 1000);
    }

    startStopButton.addEventListener('click', function() {
        if (isTimerRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    });
    
    function stopTimer() {
        clearInterval(interval);
        isTimerRunning = false;
        startStopButton.innerHTML = 'Start';
    }

    resetButton.addEventListener('click', function() {
        isTimerRunning = false;
        clearInterval(interval);
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        timer.innerHTML = '00:00:00';
        startStopButton.innerHTML = 'Start';
    });

    popCloseBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        audio.pause();
    });
    console.log(('script chargé'));
});