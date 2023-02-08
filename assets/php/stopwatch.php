<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronomètre</title>
    <link rel="stylesheet" href="/oclock/assets/css/style.css">
</head>
<body>
    <?php include '../../includes/header.php' ?>

    <div class="container">

        <div id="timerDisplay" class="row center m1">
            <div id="timerDiv" class="timer center m1">00:00:00</div>     
        </div>

        <div id="buttons" class="center">
            <button id="startStopButton" data-switch="start" >Start</button>
            <button id="tourButton">Tour</button>
            <button id="reset">Reset</button>
        </div>

        <ul id="tourList" class="center"></ul>

    </div> <!-- /container -->

    <script src="/oclock/assets/js/stopwatch.js"></script>
</body>
</html>