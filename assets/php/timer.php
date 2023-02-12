<?php include '../../includes/header.php' ?>

<div class="container">

    <div id="popup" class="center">
        <h2>Temps écoulé !</h2>
        <span id="popCloseBtn" type="button" class="close">&times;</span>
    </div>    
    <div id="timer" class="timer center m1">00:00:00</div>  

    <div class="row center m1">
        <div class="col center">
            <p class="center">Heures</p>
            <input type="number" class="center" id="inputHour" value="00"> 
        </div>
        <div class="col center">
            <p class="center">Minutes</p>
            <input type="number" class="center" id="inputMinute" value="00">
        </div>
        <div class="col center">
            <p class="center">Secondes</p>
            <input type="number" class="center" id="inputSecond" value ="00">
        </div>
    </div> <!-- /row -->
    
    <div class="row center m1">
        <div class="col-6">
            <button id="startStopButton" data-switch="start">Start</button>  
        </div>
        <div class="col-6">
            <button id="resetButton" type="button">Reset</button>
        </div>
    </div>


    
</div>

<script src="/oclock/assets/js/timer.js"></script>
<?php include '../../includes/footer.php' ?>