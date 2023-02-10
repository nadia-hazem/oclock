//////////////////
// CHRONOMÈTRE //
////////////////
// Réalisation d'un chronomètre, il est possible de le lancer et de l’arrêter grâce à un même bouton (marche/arrêt). De plus, un bouton “tour” ajoutera le tour affiché de chaque arrêt du chronomètre dans une liste "temps”, au moment où l’utilisateur appuie sur stop. Un autre bouton permet de réinitialiser le minuteur.

// Chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
    
    // Déclaration des variables 
    let running = 0; 
    let times = [];
    let hours = 0;
    let mins = 0;
    let secs = 0;
    let tenths = 0;
    let timeValue = 0; // Temps affiché sur le chronomètre
    timeValue.innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths;
    
    // Déclaration des éléments du DOM
    let startStopButton = document.getElementById('startStopButton');
    let resetButton = document.getElementById('resetButton');
    let tourButton = document.getElementById('tourButton');
    let tourList = document.getElementById('tourList');
    let lastTime = times[times.length - 1];
    // Afficher un 0 devant les chiffres inférieurs à 10
    if (hours < 10) { hours = '0' + hours };
    if (mins < 10) { mins = '0' + mins };
    if (secs < 10) { secs= '0' + secs };
    if (tenths < 10) { tenths = '0' + tenths };
    // Affichage du temps sur le chronomètre
    document.getElementById("chronoSet").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths ;

    // fonction pour récupérer le temps actuel
    function getTime() {
        currentTime = new Date().getTime();
        return currentTime;
    }
    
    // Fonction pour incrémenter le temps affiché    
    function increment(){
        // Si le chronomètre est en marche, on incrémente le temps affiché
        if(running == 1){
            setTimeout(function(){
                timeValue++;
                // On récupère les heures, minutes, secondes et dixièmes de secondes
                let tenths = (timeValue % 100);
                let secs = Math.floor(timeValue / 100);
                let mins = Math.floor(secs / 60);
                let hours = Math.floor(mins / 60);
                // On affiche le temps sur le chronomètre
                tenths = tenths % 100;
                secs = secs % 60;
                mins = mins % 60;
                hours = hours % 60;
                // Affiche un 0 devant les chiffres inférieurs à 10
                if (hours < 10) { hours = '0' + hours };
                if (mins < 10) { mins = '0' + mins };
                if (secs < 10) { secs= '0' + secs };
                if (tenths < 10) { tenths = '0' + tenths };
                // Affichage du temps sur le chronomètre
                document.getElementById("chronoSet").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths ;
                increment();
            },10);
        } else {
            return;
        }

    }

    // Fonction pour démarrer le chronomètre 
    function startChrono(){ 
        // Si le chronomètre est arrêté, on le démarre
        if(running == 0){ 
            // Le chronomètre est en marche
            running = 1; 
            // Récupère le temps actuel
            getTime(); 
            // Change le texte du bouton "marche/arrêt"
            startStopButton.innerHTML = "stop"; 
            // Supprime l'attribut "data-switch" du bouton "marche/arrêt"
            delete startStopButton.dataset.switch; 
            // Appel de la fonction pour incrémenter le temps affiché 
            increment(); 
            
        } else { // Si le chronomètre est en marche, on l'arrête et on ajoute le temps à la liste "temps"
            stopChrono(); // Appel de la fonction pour arrêter le chronomètre
            getTime(); // Récupère le temps actuel
            addTimeToList();
            startStopButton.innerHTML = "start"; // Change le texte du bouton "marche/arrêt"
        }  
    }  

    // Fonction pour arrêter le chronomètre
    function stopChrono(){
        // Le chronomètre est arrêté
        running = 0; 
        // Récupère le temps actuel
        stopTime = new Date().getTime();
        // Change le texte du bouton "marche/arrêt"
        startStopButton.dataset.switch = "start"; 

    }
    
    // Fonction pour ajouter un temps à la liste "temps"
    function addTimeToList () { 
        // Récupère le temps affiché sur le chronomètre
        let time = document.getElementById("chronoSet").innerHTML;
        // Ajoute le temps à la liste "temps"
        times.push(time);
        // Crée un élément "li" pour afficher le temps dans la liste "temps"
        let temps = document.createElement('li');
        // Affiche le temps dans la liste "temps"
        temps.innerHTML = time;
        // Ajoute le temps à la liste "temps"
        tourList.appendChild(temps);
        // Affiche la liste "temps"
        tourList.style.display = "block";
    }

    // Fonction pour remettre le chronomètre à 0
    function resetChrono(){
        // Le chronomètre est arrêté
        timeValue = 0;
        // On récupère les heures, minutes, secondes et dixièmes de secondes
        document.getElementById("chronoSet").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths ;
        // On initialise le tableau "temps"
        times = [];
        // On cache la liste "temps"
        tourList.innerHTML = "";
    }

    // Ecouteur d'événement pour démarrer le chronomètre
    startStopButton.addEventListener('click', function(event) {
        // Empêche le comportement par défaut du bouton "marche/arrêt"
        event.preventDefault();
        // Si le bouton "marche/arrêt" n'a pas d'attribut "data-switch", on le lui ajoute
        startStopButton.dataset.switch = 'start';
        // Si le bouton "marche/arrêt" a l'attribut "data-switch" avec la valeur "start", on démarre le chronomètre
        if (startStopButton.dataset.switch === 'start') {
            startChrono(timeValue);
        // Si le bouton "marche/arrêt" a l'attribut "data-switch" avec la valeur "stop", on arrête le chronomètre
        } else {
            stopChrono();
        }
    });

    // Ecouteur d'événement sur le resetButton
    resetButton.addEventListener('click', function() {
        resetChrono();
    });

    // Ecouteur d'événement sur le tourButton
    tourButton.addEventListener('click', function() {
        getTime();
        addTimeToList();
    });


}); // Fin du chargement du DOM