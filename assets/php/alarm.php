<?php include '../../includes/header.php' ?>

<div class="container">

    <div id="clockDisplay" class="horloge auto"></div>
        
    <div class="col">
        
        <form action="">   
            <div class="row center m1">
                <div class="col center">
                    <label for="alarmTime" class="center">Heure de l'alarme : </label>
                    <input type="time" name="timeinput" id="alarmTime" required>
                </div>
            </div> <!--/row-->

            <div class="row center m1">
                <div class="col center">
                    <label for="alarmMessage" class="center">Message : </label>
                    <input type="text" name="messageinput"  id="alarmMessage" required>
                </div>
            </div> <!--/row-->

            <button id="alarmButton" type="submit" name="submitalarm" class="alarmButton">Ajouter une alarme</button>

        </form>
        
        <!-- <div id="alarmDisplay"></div> -->
        <div class="row">
            <div id="comingAlarm" class="col">
                <h3 class="p border">Alarmes programées</h3>
                <ul id="comingAlarmList"></ul>
            </div>
            <div class="col">&nbsp;&nbsp;</div>
            <div id="passedAlarm" class="col">
                <h3 class="p border">Alarmes terminées</h3>
                <ul id="passedAlarmList"></ul>
            </div>
        </div>

        <div id="popup" class="center">
            <span class="close">&times;</span>
        </div>
    </div>
        
</div>

<script src="/oclock/assets/js/alarm.js"></script>
<script src="/oclock/assets/js/clock.js"></script>

<?php include '../../includes/footer.php' ?>