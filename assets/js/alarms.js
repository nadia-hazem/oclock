/////////////
// ALARME //
///////////
// créer un réveil, l’utilisateur pourra entrer une heure et un texte en input. Lorsque l’horloge atteindra l’heure entrée, une sonnerie retentit et une popup "#popup" apparaît indiquant le message que l’utilisateur aura rentré. avec un bouton pour fermer le #popup et arrêter la sonnerie. De plus, l’utilisateur aura la possibilité d’entrer plusieurs alarmes qui seront affichées dans une liste, avec l'heure et mention “passée” si l’heure de l’alarme est passée, et “dans x temps” avec x représentant le temps restant avant la prochaine alarme. sépare le js et le html dans 2 fichiers différents

document.addEventListener('DOMContentLoaded', function () {

    if(!document.getElementById('alarmButton')) {
        console.error('No element with the id of "alarmButton" found.');
    }
    
    // Declaration constante
    const ringtone = new Audio("/oclock/assets/audio/alarm-clock.mp3");
    // Declaration variables
    let currentTime = Date.now();
    let alarmTime = new Date().getTime();
    let alarmMessage = document.querySelector('#alarmMessage').value;
    let alarmButton = document.querySelector('#alarmButton');
    let comingAlarm = document.querySelector('#comingAlarm');
    let passedAlarm = document.querySelector('#passedAlarm');
    let popup = document.querySelector('#popup');

    let alarmDate = new Date(alarmTime);
    let alarmList = [{time: alarmDate.toLocaleTimeString(), message: alarmMessage}];


    // Vérifier si l'élément alarmButton existe
    if(!document.getElementById('alarmButton')) {
        console.error('No element with the id of "alarmButton" found.');
    }
    
    // Fonction pour ajouter une alarme
    function addAlarm() {
        // Réccupération des valeurs des inputs
        alarmTime = document.getElementById("alarmTime").value;
        alarmMessage = document.getElementById("alarmMessage").value;
        
        // Ajouter l'alarme à la liste
        let newAlarm = {time: new Date(alarmTime), message: alarmMessage};
        alarmList.push(newAlarm);
        
        // Afficher la liste des alarmes
        let displayHTML = "<ul>";
        
        for (let i = 0; i < alarmList.length; i++) {
            
            // Calcul du temps restant avant l'alarme
            let alarmDate = new Date(alarmList[i].time);
            let timeDifference = alarmDate - currentTime;
            
            // Si le temps restant est positif
            if (timeDifference < 0) {
                // Afficher le temps restant
                document.getElementById("comingAlarm").innerHTML = "Alarme dans " + Math.round(timeDifference / 1000 / 60) + " minutes: " + alarmList[i].message;
                /* displayHTML += "<li> Alarme dans " + Math.round(timeDifference / 1000 / 60) + " minutes: " + alarmList[i].message + "</li>"; */
                
            } else {
                // Sinon, afficher que l'alarme est passée
                document.getElementById("passedAlarm").innerHTML += alarmTime.time + "; <li class='listeAlarmes'> Alarme passée : " + alarmList[i].message + "</li>";
            }
            // add a variable to store the HTML for displaying the alarm list.
        }
        // Fermer la liste
        displayHTML += "</ul>";
        // Afficher la liste dans le HTML
        document.getElementById("alarmDisplay").innerHTML = displayHTML;
    }

    // Fonction pour afficher une alerte lorsque l'alarme est atteinte
    function checkAlarms() {
        let currentTime = Date.now();
        // On parcourt la liste des alarmes
        for (let i = 0; i < alarmList.length; i++) {
            // Si l'heure de l'alarme est inférieure à l'heure actuelle
            if (alarmList[i].time >= currentTime) {
                // Afficher une alerte
                popup.style.display = "block";
                popup.textContent += alarmList[i].time.toLocaleTimeString() + ": " + alarmList[i].message;
                // Jouer la sonnerie
                ringtone.play();
                // Fermer la sonnerie
            } else {
                // Sinon, on ne fait rien
                console.log("Alarme passée");
            }
        }
        let close = document.querySelectorAll('.close');
        
        close.onclick = function() {
            popup.style.display = "none";
            ringtone.pause();
        }
    }
    setInterval(checkAlarms, 1000);

    // Ajouter un écouteur d'évènement sur le bouton d'ajout d'alarme
    alarmButton.addEventListener('click', function () {
        addAlarm();
    });    

});
