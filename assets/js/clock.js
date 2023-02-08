////////////
// CLOCK //
//////////
// En ce qui concerne l’horloge, elle devra être à l’heure française (UTC + 1), fonctionnelle, et donner l’heure, les minutes, et les secondes.

console.log("clock.js has been loaded.");

document.addEventListener('DOMContentLoaded', function () {

    function displayClock() {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        
        second = second < 10 ? "0" + second : "" + second;
        minute = minute < 10 ? "0" + minute : "" + minute;
        hour = hour < 10 ? "0" + hour : "" + hour;

        let clock = `${hour}:${minute}:${second}`;
        console.log(clock);
        document.getElementById("clockDisplay").innerHTML = `<p class="clock">${clock}</p>`; 
    }
    
    displayClock();
    setInterval(displayClock, 1000);

});