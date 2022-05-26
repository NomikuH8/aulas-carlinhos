<?php
    $reais = $_GET['reais'];
    $moedaConv = $_GET['moeda'];

    $dolar = 4.83;
    $euro = 5.17;
    $libra = 6.07;
    $rem = 0.72;

    $conv = 0;
    switch ($moedaConv) {
        case 'en':
            $conv = $reais * $dolar;
            break;
        case 'eu':
            $conv = $reais * $euro;
            break;
        case 'lib':
            $conv = $reais * $libra;
            break;
        case 'yuan':
            $conv = $reais * $rem;
            break;
    }

    echo "Reais: $reais <br>";
    echo "Convertido: $conv <br>";
?>

<a href="3.html">Voltar a regory</a>