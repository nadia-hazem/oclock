///////////////
// MINUTEUR //
/////////////
// Réaliser un minuteur. Il doit être possible d’augmenter le temps du minuteur grâce à des flèches, ou de rentrer un “temps” grâce à un input. Un seul bouton pour start/stop le minuteur. Lorsque le minuteur arrive à zéro, un message apparaît et indique que le temps est écoulé. Il faut pouvoir réinitialiser le minuteur.

document.addEventListener('DOMContentLoaded', function () {
    
    // Déclaration des variables 
    let timer = document.querySelector('#timer'); 
    let savedTime;
    let timerButton = document.querySelector('#timerButton');
    let isTimerRunning = false;
    let hour = document.querySelector('#inputHour');
    let minute = document.querySelector('#inputMinute');
    let second = document.querySelector('#inputSecond');
    let reset = document.querySelector('#reset');
    let popup = document.querySelector('#popup');
    popup.style.display = 'none';
    let popCloseBtn = document.querySelector('#popCloseBtn');
    
    
    // Déclaration des fonctions
    timerButton.addEventListener('click', function() {
        
        if (!isTimerRunning) {
            let hourValue = parseInt(hour.value);
            let minuteValue = parseInt(minute.value);
            let secondValue = parseInt(second.value);
            let totalTime = hourValue * 3600 + minuteValue * 60 + secondValue;
            
            savedTime = totalTime;
            
            let interval;
            interval = setInterval(function() {
                totalTime--;
                hour.value = Math.floor(totalTime / 3600);
                minute.value = Math.floor((totalTime - hour.value * 3600) / 60);
                
                second.value = totalTime - hour.value * 3600 - minute.value * 60;
                
                // rajout des 0
                hour.value = hour.value < 10 ? "0" + hour.value : hour.value;
                minute.value = minute.value < 10 ? "0" + minute.value : minute.value;
                second.value = second.value < 10 ? "0" + second.value : second.value;
                
                timer.innerHTML = hour.value + ':' + minute.value + ':' + second.value;
                if (totalTime <= 0) {
                    clearInterval(interval);
                    isTimerRunning = false;
                    timerButton.innerHTML = 'Start';
                    popup.style.display = 'block';
                    let audio = new Audio("/oclock/assets/audio/fail-trumpet.mp3");
                    audio.play();
                    popCloseBtn.addEventListener('click', function() {
                        popup.style.display = 'none';
                        audio.pause();
                    });
                    popCloseBtn.style.display = 'block';
                }
            }, 1000);
            isTimerRunning = true;
            timerButton.innerHTML = 'Stop';
        } else {
            clearInterval(interval);
            isTimerRunning = false;
            timerButton.innerHTML = 'Start';
        }
    });
    
    reset.addEventListener('click', function() {
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        timer.innerHTML = '00:00:00';
        clearInterval(interval);
        timerButton.innerHTML = 'Start';
    });

});