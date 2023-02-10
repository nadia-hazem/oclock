///////////////
// MINUTEUR //
/////////////
// Réalisation d'un minuteur. Il est possible d’augmenter le temps du minuteur grâce à des flèches, ou de rentrer un “temps” grâce à un input. Un seul bouton pour start/stop le minuteur. Lorsque le minuteur arrive à zéro, un message apparaît et indique que le temps est écoulé. Un autre bouton permet de réinitialiser le minuteur.

// Chargement du DOM
document.addEventListener('DOMContentLoaded', function () {

    // Déclaration constante
    const ringtone = new Audio("/oclock/assets/audio/fail-trumpet.mp3");

    // Déclaration des variables 
    let timer = document.querySelector('#timer'); 
    timer.innerText = '00:00:00';
    let startStopButton = document.querySelector('#startStopButton');
    let resetButton = document.querySelector('#resetButton');
    let popCloseBtn = document.querySelector('#popCloseBtn');
    let isTimerRunning = false;
    let hour = document.querySelector('#inputHour');
    let minute = document.querySelector('#inputMinute');
    let second = document.querySelector('#inputSecond');
    let popup = document.querySelector('#popup');
    popup.style.display = 'none';
    let interval;

    // Fonction qui lance le timer
    function startTimer() {
        // Si le timer est en cours
        isTimerRunning = true;
        // On change le texte du bouton
        startStopButton.innerHTML = 'Stop';
        // On lance l'interval
        interval = setInterval(function() {
            // si les secondes sont supérieures à 0, on décrémente
            if (second.value > 0) {
                second.value--;
            // si les secondes sont à 0, on décrémente les minutes
            } else if (minute.value > 0) {
                minute.value--;
                second.value = 59;
            // si les minutes sont à 0, on décrémente les heures
            } else if (hour.value > 0) {
                hour.value--;
                minute.value = 59;
                second.value = 59;
            // si les heures sont à 0, on arrête le timer
            } else {
                // on affiche le popup
                popup.style.display = 'block';
                // on joue le son
                ringtone.play();
                // on arrête le timer
                stopTimer();
            }
            // on affiche le timer
            timer.innerHTML = hour.value.toString().padStart(2, '0') + ':' + minute.value.toString().padStart(2, '0') + ':' + second.value.toString().padStart(2, '0');

        }, 1000); // on déclenche l'intervalle toutes les secondes
    }

    // Fonction pour arrêter le timer
    function stopTimer() {
        // On arrête l'interval
        clearInterval(interval);
        // si le timer est en cours, on l'arrête
        isTimerRunning = false;
        // On change le texte du bouton
        startStopButton.innerHTML = 'Start';
    }

    // On écoute le click sur le bouton start/stop
    startStopButton.addEventListener('click', function() {
        // Si le timer est en cours, on l'arrête
        if (isTimerRunning) {
            stopTimer();
        } else {
            // Sinon on le lance
            startTimer();
        }
    });

    // On écoute le click sur le bouton reset
    resetButton.addEventListener('click', function() {
        // On arrête le timer
        isTimerRunning = false;
        // On arrête l'interval
        clearInterval(interval);
        // On remet les valeurs à 0
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        timer.innerHTML = '00:00:00';
        // On change le texte du bouton
        startStopButton.innerHTML = 'Start';
    });

    // On écoute le click sur le bouton close du popup
    popCloseBtn.addEventListener('click', function(event) {
        // annulation de l'action par défaut du bouton
        event.preventDefault();
        // On cache le popup
        popup.style.display = 'none';
        // On arrête le son
        audio.pause();
    });

    /* console.log(('script chargé')); */
});