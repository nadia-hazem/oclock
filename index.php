<?php require_once 'includes/header.php'; ?>

<div class="container">

    <div id="dateDisplay" class="dateDisplay">
        <?php
            $mois = array(1=>'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
            $jours = array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');
            echo 'Nous sommes le '.$jours[date('w')].' '.date('j').' '.$mois[date('n')].' '.date('Y'); 
        ?>
    </div>

    <div id="clockDisplay" class="clock center">
        <p>00:00:00</p>
    </div>
</div>


<script src="/oclock/assets/js/clock.js"></script>

<?php require_once 'includes/footer.php'; ?>