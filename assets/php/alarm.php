<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alarme</title>
    <link rel="stylesheet" href="/oclock/assets/css/style.css">
</head>
<body>
    <?php include '../../includes/header.php' ?>
    
    <div class="container">

        <p class="center">Ajoutez une alarme pour être notifié à une heure précise.</p>
        
        <div class="col">
            
            <form action="">   

                <div id="currentTime"></div>
                <label for="alarmTime" class="center">Heure de l'alarme : </label>
                <input type="time" name="timeinput" id="alarmTime" required>
                
                <label for="alarmMessage" class="center">Message : </label>
                <input type="text" name="messageinput"  id="alarmMessage" required>
                
                <button id="alarmButton" type="submit" name="submitalarm" class="alarmButton">Ajouter une alarme</button>

            </form>

            <!-- <div id="alarmDisplay"></div> -->
            <div id="comingAlarm">
                <h3>Alarmes programées</h3>
                <ul id="comingAlarmList"></ul>
            </div>
            <div id="passedAlarm">
                <h3>Alarmes terminées</h3>
                <ul id="passedAlarmList"></ul>
            </div>
            
            <div id="popup" class="center">
                <span class="close">&times;</span>
            </div>
        </div>
            
    </div>

    <script src="/oclock/assets/js/alarm.js"></script>
</body>
</html>