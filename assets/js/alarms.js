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
    
    // Ajoute un "0" devant les nombres inférieurs à 10
    if (hours < 10) { hours = '0' + hours };
    if (mins < 10) { mins = '0' + mins };
    if (secs < 10) { secs= '0' + secs };

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
                let hours = Math.floor(timeValue/10/60/60);
                let mins = Math.floor(timeValue/10/60);  
                let secs = Math.floor(timeValue/10 % 60);  
                let tenths = timeValue % 10; 
                
                if (hours < 10) { hours = '0' + hours };
                if (mins < 10) { mins = '0' + mins };  
                if (secs < 10) { secs= '0' + secs };   

                document.getElementById("chronoSet").innerHTML= hours + ':' + mins + ':' + secs + ':' + tenths ;   
                // Appel de la fonction pour incrémenter le temps affiché
                increment();
                
            },100);
            
        } else { // Si le chronomètre est arrêté, on affiche le temps arrêté
            
            document.getElementById("chronoSet").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths ;
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
        let time = document.getElementById("chronoSet").innerHTML; // Récupère le temps affiché
        times.push(time); // Ajoute le temps à la liste "temps"
    }

    // fonction pour afficher la liste "temps"
    function displayTimeList () {
        times.forEach(time => {
            let li = document.createElement("li");
            li.innerHTML = time;
            tourList.appendChild(li);
        });
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

    // Ecouteur d'événement sur le reset à 0
    resetButton.addEventListener('click', function() {
        resetChrono();
    });

    // Ecouteur d'événement sur le tour
    tourButton.addEventListener('click', function(event) {
        event.preventDefault();

        tourButton.dataset.switch = 'tour'
        if(tourButton.dataset.switch === 'tour') {
            displayTimeList();
            tourList.style.display = "block";
        } else {
            tourList.style.display = "none";
        }
    });

}); // Fin du chargement du DOM