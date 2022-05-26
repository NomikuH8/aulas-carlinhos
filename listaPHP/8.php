<?php
    $fruta = $_POST['selectFruta'];

    switch ($fruta) {
        case 'laranja' || 'limão' || 'abacaxi' || 'uva' || 'maracujá' || 'manga':
            echo "A fruta $fruta é boa para fazer suco";
            break;
            
        case 'banana' || 'mamão' || 'melão' ||'pêssego' || 'abacate':
            echo "A fruta $fruta é boa para fazer vitamina";
            break;        
            
        default:
            echo "erro";
            break;
    }
?>
<br>
<a href="8.html">voltar</a>