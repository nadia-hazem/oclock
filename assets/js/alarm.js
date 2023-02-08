/////////////
// ALARME //
///////////
// créer un réveil, l’utilisateur pourra entrer une heure et un texte en input. Lorsque l’horloge atteindra l’heure entrée, une sonnerie retentit et une popup "#pop" apparaît indiquant le message que l’utilisateur aura rentré. avec un bouton pour fermer le popup et arrêter la sonnerie. De plus, l’utilisateur aura la possibilité d’entrer plusieurs alarmes qui seront affichées dans une liste, avec l'heure et mention “passée” si l’heure de l’alarme est passée, et “dans x temps” avec x représentant le temps restant avant la prochaine alarme. Sépare le js et le html dans 2 fichiers différents

document.addEventListener('DOMContentLoaded', function () {

    // Declaration constante
    const ringtone = new Audio("/oclock/assets/audio/alarm-clock.mp3");
    // Declaration variables
   
    let alarmInput = document.querySelector('#alarmTime');
    let messageInput = document.querySelector('#alarmMessage');
    let alarmButton = document.querySelector('#alarmButton');
    let comingAlarm = document.querySelector('#comingAlarmList');
    let passedAlarm = document.querySelector('#passedAlarmList');
    let pop = document.querySelector('#popup');
    pop.style.display = 'none';
    let close = document.querySelector('.close');

    // fonction pour récupérer l'heure courante
    function getCurrentTime() {
        date = new Date();
        /* let hour = date.getHours();
        let minute = date.getMinutes(); */
        let currentTime = date.getHours() + ":" + date.getMinutes();
        return currentTime;
    }

    // fonction pour récupérer l'heure de l'alarme
    function getAlarmTime() {
        alarmValue = alarmInput.value;
        return alarmValue;
    }

    // fonction pour récupérer le message de l'alarme
    function getAlarmMessage() {
        messageValue = messageInput.value;
        return messageValue;
    }

    // fonction pour calculer la différence entre l'heure courante et l'heure de l'alarme
    function compareTime() {
        let actualTime = getCurrentTime();
        let alarmTime = getAlarmTime();
        let alarmMessage = getAlarmMessage();
        if (actualTime > alarmTime) {
            let alarm = document.createElement('li');
            alarm.innerHTML = alarmTime + " - " + alarmMessage;
            passedAlarm.appendChild(alarm);
        } else {
            let alarm = document.createElement('li');
            alarm.innerHTML = alarmTime + " - " + alarmMessage;
            comingAlarm.appendChild(alarm);
        }   
    }

    // fonction pour récupérer les alarmes futures
    function getComingAlarms() {
        let comingAlarms = comingAlarm.querySelectorAll('li');
        return comingAlarms;
    }

    // fonction pour afficher le temps restant avant l'alarme
    function displayRemainingTime() {
        let comingAlarms = getComingAlarms();
        let actualTime = getCurrentTime();
        for (let i = 0; i < comingAlarms.length; i++) {
            let alarm = comingAlarms[i];
            let alarmTime = alarm.innerHTML.split(' - ')[0];
            let alarmMessage = alarm.innerHTML.split(' - ')[1];
            
            let alarmSplit = alarmTime.split(':');
            let alarmHour = alarmSplit[0];
            let alarmMinute = alarmSplit[1];
            let actualSplit = actualTime.split(':');
            let actualHour = actualSplit[0];
            let actualMinute = actualSplit[1];
            let remainingHour = alarmHour - actualHour;
            let remainingMinute = alarmMinute - actualMinute;
            let remainingTime = remainingHour + ":" + remainingMinute;
            alarm.innerHTML = alarmTime + " - " + alarmMessage + " - dans " + remainingTime;
        }
    }

    // fonction pour faire sonner l'alarme
    function ringAlarm() {
        let actualTime = getCurrentTime();
        let comingAlarms = getComingAlarms();
        for (let i = 0; i < comingAlarms.length; i++) {
            let alarm = comingAlarms[i];
            let alarmTime = alarm.innerHTML.split(' - ')[0];
            let alarmMessage = alarm.innerHTML.split(' - ')[1];
            if (alarmTime == actualTime) {
                alarm.innerHTML = alarmTime + " - " + alarmMessage;
                // passage de l'alarme dans la liste des alarmes passées
                passedAlarm.appendChild(alarm);

                pop.style.display = 'block';
                // création du message de l'alarme dans la popup
                let p = document.createElement('p');
                p.innerHTML = alarmTime + " - " + alarmMessage;
                pop.appendChild(p);
                ringtone.play();
            }
        }
    }



    alarmButton.addEventListener('click', function (event) {
        event.preventDefault();
        compareTime();
        displayRemainingTime();
        alarmInput.value = '';
        messageInput.value = '';
    });

    close.addEventListener('click', function (event) {
        event.preventDefault();
        pop.style.display = 'none';
        ringtone.pause();
    });

    // lancement des fonctions toutes les secondes
    setInterval(function () {
        displayRemainingTime();
        ringAlarm();
    }, 1000);



    /*     // fonction pour afficher l'heure courante
    function displayCurrentTime() {
        document.querySelector('#currentTime').innerHTML = new Date(currentTime).toLocaleTimeString();
    }
    */

});
