<?php
    $fruta = $_POST['selectFruta'];

    switch ($fruta) {
        case 'abacate':
            $calorias = '160 kcal';
            $carbo = '8.53 g';
            $acucar = '0.66 g';
            $fibra = '6.7 g';
            $gordura = '14.66 g';
            $proteina = '2 g';
            break;
        
        case 'abacaxi':
            $calorias = '36 kcal';
            $carbo = '9.23 g';
            $acucar = '0.87 g';
            $fibra = '0.75 g';
            $gordura = '0.08 g';
            $proteina = '0.68 g';
            break;
        
        case 'laranja':
            $calorias = '113.4 kcal';
            $carbo = '27.9 g';
            $acucar = '3.2 g';
            $fibra = '8.1 g';
            $gordura = '0.54 g';
            $proteina = '2.34 g';
            break;

        case 'maçã':
            $calorias = '67.6 kcal';
            $carbo = '17.95 g';
            $acucar = '1.75 g';
            $fibra = '3.12 g';
            $gordura = '0.22 g';
            $proteina = '0.34 g';
            break;

        case 'banana':
            $calorias = '39.6 kcal';
            $carbo = '10.32 g';
            $acucar = '1.25 g';
            $fibra = '0.8 g';
            $gordura = '0.12 g';
            $proteina = '0.52 g';
            break;

        case 'mamão':
            $calorias = '124 kcal';
            $carbo = '32.24 g';
            $acucar = '3.2 g';
            $fibra = '3.1 g';
            $gordura = '0.31 g';
            $proteina = '1.55 g';
            break;

        case 'melão':
            $calorias = '26,10 kcal';
            $carbo = '6.75 g';
            $acucar = '0.64 g';
            $fibra = '0.27 g';
            $gordura = '0 g';
            $proteina = '0.63 g';
            break;
            
        case 'pêssego':
            $calorias = '34.80 kcal';
            $carbo = '6.78 g';
            $acucar = '0.85 g';
            $fibra = '0.56 g';
            $gordura = '0.02 g';
            $proteina = '0.23 g';
            break;
    }
    
    $tableHeader = "<table><tr><th>Fruta (1 porção)</th><th>$fruta</th></tr>";
    $linhaCalorias = "<tr><th>Calorias</th><td>$calorias</td></tr>";
    $linhaCarbo = "<tr><th>Carbo</th><td>$carbo</td></tr>";
    $linhaAcucar = "<tr><th>Acucar</th><td>$acucar</td></tr>";
    $linhaFibra = "<tr><th>Fibra</th><td>$fibra</td></tr>";
    $linhaGordura = "<tr><th>Gordura</th><td>$gordura</td></tr>";
    $linhaProteina = "<tr><th>Proteina</th><td>$proteina</td></tr>";
    $tableFooter = "</table>";

    echo "$tableHeader";
    echo "$linhaCalorias";
    echo "$linhaCarbo";
    echo "$linhaAcucar";
    echo "$linhaFibra";
    echo "$linhaGordura";
    echo "$linhaProteina";
    echo "$tableFooter"
?>
<br>
<a href="9.html"></a>