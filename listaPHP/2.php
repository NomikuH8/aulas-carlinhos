<?php
    $raioEsfera = $_POST['raioEsf'];

    $volumeEsfera = round((4 * pi() * pow($raioEsfera, 3)/3), 2);
    echo "O volume da esfera é: $volumeEsfera";
?>