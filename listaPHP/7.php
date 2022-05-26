<?php
    $preco = (float)$_GET['prodPreco'];

    $pct = 1;
    $pct1 = $pct + 0.95;
    $pct2 = $pct + 0.87;
    $pct3 = $pct + 0.837;

    $precoAumentado = $preco;

    if ($preco <= 10)
        $precoAumentado *= $pct1;
    elseif ($preco <= 50) 
        $precoAumentado *= $pct2;
    else
        $precoAumentado *= $pct3;
    
    echo "Preço original: $preco<br>";
    echo "Preco aumentado: $precoAumentado<br>";
?>

<a href="7.htmp">Voltar ao gory</a>