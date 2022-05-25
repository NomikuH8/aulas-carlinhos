<?php
    $ladoHex = $_POST['ladoHex'];
    $compRet = $_POST['compRet'];
    $altRet = $_POST['altRet'];
    $compPrisma = $_POST['compPrisma'];

    echo "O lado do hexagono é: $ladoHex <br>";
    echo "O comprimento do retângulo é: $compRet <br>";
    echo "A altura do retângulo é: $altRet <br>";
    echo "O comprimento do prisma é: $compPrisma <br>";

    $areaHexBase = round((pow($ladoHex, 2) * sqrt(3) / 4) * 6, 2);
    echo "A área da base do prisma é: $areaHexBase <br>";

    $areaRetLateral = ($compRet * $altRet);
    echo "A área dos retângulos laterais é: $areaRetLateral <br>";

    $areaTotalPrisma = round(((2 * $areaHexBase) + (6 * $areaRetLateral)), 2);
    echo "A área total do prisma é: $areaTotalPrisma <br>";
    
    $volumePrisma = round(($areaHexBase * $compPrisma), 2);
    echo "O volume total do prisma é: $volumePrisma <br>";
?>