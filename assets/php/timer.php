<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minuteur</title>
    <link rel="stylesheet" href="/oclock/assets/css/style.css">
</head>
<body>
    <?php include '../../includes/header.php' ?>
    <div class="container">

        <div id="popup" class="center">
            <h2>Temps écoulé</h2>
            <button id="popCloseBtn" type="button" class="close">X</button>
        </div>
        
        <div id="timer" class="timer center m1">00:00:00</div>  

        <div class="row center m1">
            <input type="number" class="inputNumber" id="inputHour" value="00"> 
            <input type="number" class="inputNumber" id="inputMinute" value="00">
            <input type="number" class="inputNumber" id="inputSecond" value ="00">
        </div>
        
        <div class="row center m1">
            <div class="col-6">
                <button id="timerButton">Start</button>  
            </div>
            <div class="col-6">
                <button id="reset">Reset</button>  
            </div>
        </div>


        
    </div>

    <script src="/oclock/assets/js/timer.js"></script>
</body>
</html>