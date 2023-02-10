/////////////
// ALARME //
///////////
// Réalisation d'un réveil. L’utilisateur peut entrer une heure et un texte en input. Lorsque l’horloge atteindra l’heure entrée, une sonnerie retentira et une popup apparaîtra, indiquant le message que l’utilisateur aura rentré. avec un bouton pour fermer le popup et arrêter la sonnerie. De plus, l’utilisateur a la possibilité d’entrer plusieurs alarmes qui seront affichées dans une liste, avec l'heure et mention “passée” si l’heure de l’alarme est passée, et “dans x temps” avec x représentant le temps restant avant la prochaine alarme.

// Chargement du DOM
document.addEventListener('DOMContentLoaded', function () {

    // Declaration constante
    const ringtone = new Audio("/oclock/assets/audio/alarm-clock.mp3");

    // Declaration des variables
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
    }

    // fonction pour afficher l'heure courante
    function displayCurrentTime() {
        // récupération de l'heure courante
        let actualTime = getCurrentTime();
        // affichage de l'heure courante
        actualTimeDisplay.innerHTML = actualTime;
        // Formatage de l'heure
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
        // récupération de l'heure courante
        let actualTime = getCurrentTime();
        // récupération de l'heure de l'alarme
        let alarmTime = getAlarmTime();
        // récupération du message de l'alarme
        let alarmMessage = getAlarmMessage();
        // comparaison de l'heure courante et de l'heure de l'alarme
        if (actualTime > alarmTime) {
            // création de l'alarme dans la liste des alarmes passées
            let alarm = document.createElement('li');
            // affichage de l'heure de l'alarme et du message de l'alarme
            alarm.innerHTML = alarmTime + " - " + alarmMessage;
            // ajout de l'alarme dans la liste des alarmes passées
            passedAlarm.appendChild(alarm);
        } else {
            // création de l'alarme dans la liste des alarmes futures
            let alarm = document.createElement('li');
            // affichage de l'heure de l'alarme et du message de l'alarme
            alarm.innerHTML = alarmTime + " - " + alarmMessage;
            // ajout de l'alarme dans la liste des alarmes futures
            comingAlarm.appendChild(alarm);
        }   
    }

    // fonction pour récupérer les alarmes futures
    function getComingAlarms() {
        // variable de Selection des alarmes futures
        let comingAlarms = comingAlarm.querySelectorAll('li');
        return comingAlarms;
    }

    // fonction pour afficher le temps restant avant l'alarme
    function displayRemainingTime() {
        // récupération des alarmes futures
        let comingAlarms = getComingAlarms();
        // récupération de l'heure courante
        let actualTime = getCurrentTime();
        // calcul du temps restant avant l'alarme
        for (let i = 0; i < comingAlarms.length; i++) {
            // récupération de l'heure de l'alarme
            let alarm = comingAlarms[i];
            // Séparer l'heure de l'alarme et le message de l'alarme
            let alarmTime = alarm.innerHTML.split(' - ')[0];
            let alarmMessage = alarm.innerHTML.split(' - ')[1];
            // Séparer l'heure et les minutes de l'alarme
            let alarmSplit = alarmTime.split(':');
            // récupération de l'heure et des minutes de l'alarme
            let alarmHour = alarmSplit[0];
            let alarmMinute = alarmSplit[1];
            // Séparer l'heure et les minutes de l'heure courante
            let actualSplit = actualTime.split(':');
            // récupération de l'heure et des minutes de l'heure courante
            let actualHour = actualSplit[0];
            let actualMinute = actualSplit[1];
            // calcul du temps restant avant l'alarme
            let remainingHour = alarmHour - actualHour;
            let remainingMinute = alarmMinute - actualMinute;
            // affichage du temps restant avant l'alarme
            let remainingTime = remainingHour + ":" + remainingMinute;
            // affichage de l'heure de l'alarme, du message de l'alarme et du temps restant avant l'alarme
            alarm.innerHTML = alarmTime + " - " + alarmMessage + " - dans " + remainingTime;
        }
    }

    // fonction pour faire sonner l'alarme
    function ringAlarm() {
        // récupération de l'heure courante
        let actualTime = getCurrentTime();
        // récupération des alarmes futures
        let comingAlarms = getComingAlarms();

        // On parcourt la liste des alarmes futures
        for (let i = 0; i < comingAlarms.length; i++) {
            // récupération de l'heure de l'alarme
            let alarm = comingAlarms[i];
            // Séparer l'heure de l'alarme et le message de l'alarme
            let alarmTime = alarm.innerHTML.split(' - ')[0];
            let alarmMessage = alarm.innerHTML.split(' - ')[1];

            // Si l'heure de l'alarme est égale à l'heure courante
            if (alarmTime == actualTime) {
                // suppression de l'alarme de la liste des alarmes futures
                alarm.innerHTML = alarmTime + " - " + alarmMessage;
                // passage de l'alarme dans la liste des alarmes passées
                passedAlarm.appendChild(alarm);
                // affichage de la popup
                pop.style.display = 'block';
                // création du message de l'alarme dans la popup
                let p = document.createElement('p');
                p.innerHTML = alarmTime + " - " + alarmMessage;
                // ajout du message de l'alarme dans la popup
                pop.appendChild(p);
                // Déclenchement du son de l'alarme
                ringtone.play();
            }
        }
    }

    // Ecouteur d'évènement sur le bouton "Ajouter une alarme"
    alarmButton.addEventListener('click', function (event) {
        // annulation de l'action par défaut du bouton
        event.preventDefault();
        // lance la fonction compareTime
        compareTime();
        // lance la fonction displayRemainingTime
        displayRemainingTime();
        // Vider les champs de saisie
        alarmInput.value = '';
        messageInput.value = '';
    });

    // Ecouteur d'évènement sur le bouton "Fermer" de la popup
    close.addEventListener('click', function (event) {
        // annulation de l'action par défaut du bouton
        event.preventDefault();
        // fermeture de la popup
        pop.style.display = 'none';
        // suspension du son de l'alarme
        ringtone.pause();
    });

    // lancement des fonctions toutes les secondes
    setInterval(function () {
        // lance la fonction displayCurrentTime
        displayRemainingTime();
        // lance la fonction ringAlarm
        ringAlarm();
        // Interval de 1 seconde
    }, 1000);

});
