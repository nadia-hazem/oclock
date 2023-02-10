//////////// Une horloge fonctionnelle
// CLOCK // à l’heure française (UTC + 1)
////////// qui affiche l’heure, les minutes et les secondes.


// Chargement du DOM
document.addEventListener('DOMContentLoaded', function () {

    function displayClock() {
        // new Date() permet de récupérer la date et l’heure actuelle
        let date = new Date();
        // getHours() permet de récupérer l’heure actuelle
        let hour = date.getHours();
        // getMinutes() permet de récupérer les minutes actuelles
        let minute = date.getMinutes();
        // getSeconds() permet de récupérer les secondes actuelles
        let second = date.getSeconds();
        
        // Formatage de l'heure
        second = second < 10 ? "0" + second : "" + second;
        minute = minute < 10 ? "0" + minute : "" + minute;
        hour = hour < 10 ? "0" + hour : "" + hour;

        // Affichage de l'heure
        let clock = `${hour}:${minute}:${second}`;
        // Affichage de l'heure dans la div #clockDisplay
        document.getElementById("clockDisplay").innerHTML = `<p>${clock}</p>`; 
    }
    // Affichage de l'heure au chargement de la page
    displayClock();
    // maj de l'heure toutes les secondes
    setInterval(displayClock, 1000);

});