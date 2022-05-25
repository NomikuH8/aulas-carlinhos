<?php
    // taxa de juros
    $taxa = 9.48;

    $montante = $_POST['valorMontante'];
    $anos = $_POST['anos'];

    $montante *= $taxa * $anos;
    $cadaParcela = $montante / ($anos * 12);

    echo "Montante: $montante <br>";
    echo "Valor de cada parcela: $cadaParcela <br><br>";
    echo "Taxa: $taxa <br>";
    echo "Tempo: $anos anos <br>";
?>

<a href="5.html">Voltar ao regory</a>