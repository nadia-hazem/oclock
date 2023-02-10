//////////////////
// CHRONOMÈTRE //
////////////////
// Créer un chronomètre, vous devrez le lancer et l’arrêter grâce à un même bouton (marche/arrêt). De plus, vous devrez implémenter un bouton “tour”, qui ajoutera le tour affiché de chaque arrêt du chronomètre dans une liste "temps”, au moment où l’utilisateur appuie sur stop. Un bouton reset sera présent pour remettre le chrono à 0.


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
    
    if (hours < 10) { hours = '0' + hours };
    if (mins < 10) { mins = '0' + mins };
    if (secs < 10) { secs= '0' + secs };
    if (tenths < 10) { tenths = '0' + tenths };

    document.getElementById("chronoSet").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths ;

    // fonction pour récupérer le temps actuel
    function getTime() {
        currentTime = new Date().getTime();
        return currentTime;
    }
    
    // Fonction pour incrémenter le temps affiché    
    function increment(){
        if(running == 1){
            setTimeout(function(){
                timeValue++;
                let tenths = (timeValue % 100);
                let secs = Math.floor(timeValue / 100);
                let mins = Math.floor(secs / 60);
                let hours = Math.floor(mins / 60);
                tenths = tenths % 100;
                secs = secs % 60;
                mins = mins % 60;
                hours = hours % 60;
                if (hours < 10) { hours = '0' + hours };
                if (mins < 10) { mins = '0' + mins };
                if (secs < 10) { secs= '0' + secs };
                if (tenths < 10) { tenths = '0' + tenths };
                document.getElementById("chronoSet").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths ;
                increment();
            },10);
        } else {
            return;
        }

    }

    // Fonction pour démarrer le chronomètre 
    function startChrono(){ 

        if(running == 0){ // Si le chronomètre est arrêté, on le démarre
            running = 1; // Le chronomètre est en marche
            getTime(); // Récupère le temps actuel
            startStopButton.innerHTML = "stop"; 
            delete startStopButton.dataset.switch; // Change le texte du bouton "marche/arrêt"
            increment(); // Appel de la fonction pour incrémenter le temps affiché 
            
        } else { // Si le chronomètre est en marche, on l'arrête et on ajoute le temps à la liste "temps"
            stopChrono(); // Appel de la fonction pour arrêter le chronomètre
            getTime(); // Récupère le temps actuel
            addTimeToList();
            startStopButton.innerHTML = "start"; // Change le texte du bouton "marche/arrêt"
        }  
    }  

    // Fonction pour arrêter le chronomètre
    function stopChrono(){

        running = 0; // Le chronomètre est arrêté
        stopTime = new Date().getTime(); // Récupère le temps actuel
        startStopButton.dataset.switch = "start"; // Change le texte du bouton "marche/arrêt"

    }
    
    // Fonction pour ajouter un temps à la liste "temps"
    function addTimeToList () { 
        let time = document.getElementById("chronoSet").innerHTML;
        times.push(time);
        let temps = document.createElement('li');
        temps.innerHTML = time;
        tourList.appendChild(temps);
        tourList.style.display = "block";
    }

    // Fonction pour remettre le chronomètre à 0
    function resetChrono(){
        timeValue = 0;
        document.getElementById("chronoSet").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths ;
        times = [];
        tourList.innerHTML = "";
    }

    // Ecouteur d'événement pour démarrer le chronomètre
    startStopButton.addEventListener('click', function(event) {
        event.preventDefault();

        startStopButton.dataset.switch = 'start';
        
        if (startStopButton.dataset.switch === 'start') {
            startChrono(timeValue);
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