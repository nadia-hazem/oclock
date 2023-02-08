//////////////////
// CHRONOMÈTRE //
////////////////
// Pour le chronomètre, vous devrez le lancer et l’arrêter grâce à un même bouton (marche/arrêt). De plus, vous devrez implémenter un bouton “tour”, qui ajoutera le temps affiché, au moment où l’utilisateur appuie, dans une liste “temps”. Un bouton reset sera présent pour remettre le chrono à 0.


document.addEventListener('DOMContentLoaded', function () {
    
    let startStopButton = document.querySelector('#startStopButton');
    let tourButton = document.querySelector('#tourButton');
    let resetButton = document.querySelector('#reset');
    let timerDiv = document.getElementById('#timerDiv');
    let tour = 0;
    let timer;
    let tourList;
    
    // Fonction pour afficher le temps actuel sur l'écran    
    function displayTime(tour) {
        let hours = Math.floor(tour / 3600);
        let minutes = Math.floor(tour / 60) % 60;
        let seconds = tour % 60;
        console.log(hours, minutes, seconds);
        console.log(tour);
    
        // rajout des 0
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        document.getElementById("timerDiv").innerHTML = hours + ':' + minutes + ':' + seconds;
            
        /* document.getElementById("timer")[0].innerHTML = hours + ':' + minutes + ':' + seconds; */
    }
    
    /* let temps = 0; */
    setInterval(function() {
        tour++;
        displayTime(tour);
    }, 1000); // met à jour le temps toutes les secondes

    // Fonction pour démarrer le chronomètre 
    function startTimer(tour) { 
        startStopButton.innerHTML = "Stop"; 
        delete startStopButton.dataset.switch;
        timer = setInterval(function() { 
            tour++; 
            displayTime(tour); 
        }, 1000); 

        console.log(tour);
        displayTime(tour);
    } 
    
    // Fonction pour arrêter le chronomètre  
    function stopTimer() {  
        clearInterval(timer);  

        startStopButton.innerHTML = "Start"; 
        startStopButton.dataset.switch = "start"; 
    } 
        
    // Fonction pour ajouter le temps à la liste des tours  
    function addTour() {  
        //tourList.push(tour);
        let tourItem = document.createElement('li');
        tourItem.textContent = tour;
        tourList.push(tourItem);
        displayTourList();  
    }  

    // Fonction pour réinitialiser le chronomètre et la liste des tours à 0  
    function resetTimer() {  

        stopTimer();
        tour = 0;
        displayTime(); 
        tourList = []; 
        displayTourList();  
        startStopButton.dataset.switch = "start"; 
    }
    
    // Fonction pour afficher la liste des tours sur l'écran   
    function displayTourList() {      
        let listeElt= document.querySelector('#tourList');      
        listeElt.innerHTML= '';      
        for (let i = 0; i < tourList.length; i++) {
            let tourElt = document.createElement('li');      
            tourElt.textContent = tourList[i];      
            listeElt.appendChild(tourElt);      
        }
    }

    startStopButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('click');

        if (startStopButton.dataset.switch === 'start') {
            startTimer(tour);
        } else {
            stopTimer();
        }
    });

    resetButton.addEventListener('click', function() {
        resetTimer();
    });

    tourButton.addEventListener('click', function() {
        addTour();
    });

});

