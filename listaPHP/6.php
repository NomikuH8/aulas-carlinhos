<?php
    $notas = [
        $_POST['nota1'],
        $_POST['nota2'],
        $_POST['nota3'],
        $_POST['nota4']
    ];

    $media = 0;
    for ($i=0; $i < sizeof($notas); $i++) { 
        $media += $notas[$i];
    }

    $media /= sizeof($notas);
    $situacao = $media > 7 ? 'aprovado' : 'reprovado';

    echo "Média do aluno: $media <br>";
    echo "Situação: $situacao <br>";
?>

<br>
<a href='6.html'>Voltar pro Gregory</a>