//////////// Une horloge fonctionnelle
// CLOCK // à l’heure française (UTC + 1)
////////// qui affiche l’heure, les minutes et les secondes.


// Chargement du DOM
document.addEventListener('DOMContentLoaded', function () {

    // new version :)
    function horloge() {
        var dt = new Date().toLocaleTimeString(); // hh:mm:ss
    
        document.getElementById("clockDisplay").innerHTML = dt;
        setTimeout(horloge, 1000); // mise à jour du contenu "clockDisplay" toutes les secondes
    }
    horloge();


/*
    }
    displayDate();
    function displayClock() {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        second = second < 10 ? "0" + second : "" + second;
        minute = minute < 10 ? "0" + minute : "" + minute;
        hour = hour < 10 ? "0" + hour : "" + hour;
        let clock = `${hour}:${minute}:${second}`;
        document.getElementById("clockDisplay").innerHTML = `<p>${clock}</p>`; 
    }

    displayClock();
    setInterval(displayClock, 1000); */

});
