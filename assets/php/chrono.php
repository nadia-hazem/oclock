<?php include '../../includes/header.php' ?>

<div class="container">

    <div id="timerDisplay" class="row center m1">
        <div id="chronoSet" class="timer center m1">00:00:00:0</div>     
    </div>

    <div id="buttons" class="center">
        <button id="startStopButton" data-switch="start" >start</button>
        <button id="tourButton" type="button">tour</button>
        <button id="resetButton" type="button">Reset</button>
    </div>

    <ul id="tourList" class="center tourlist m1"></ul>

</div> <!-- /container -->

<script src="/oclock/assets/js/chrono.js"></script>

<?php include '../../includes/footer.php' ?>