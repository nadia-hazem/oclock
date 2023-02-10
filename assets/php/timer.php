<?php include '../../includes/header.php' ?>

<div class="container">

    <div id="timer" class="timer center m1">00:00:00</div>  
    
    <div class="row center m1">
        <input type="number" id="inputHour" value="00"> 
        <input type="number" id="inputMinute" value="00">
        <input type="number" id="inputSecond" value ="00">
    </div>
    
    <div class="row center m1">
        <div class="col-6">
            <button id="startStopButton" data-switch="start">Start</button>  
        </div>
        <div class="col-6">
            <button id="resetButton" type="button">Reset</button>
        </div>
    </div>
    
    <div id="popup" class="center">
        <h2>Temps écoulé</h2>
        <span id="popCloseBtn" type="button" class="close">&times;</span>
    </div>    

    
</div>

<script src="../js/timer.js"></script>