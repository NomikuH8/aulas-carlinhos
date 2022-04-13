function chRes(val) {
    document.querySelector('#result').innerHTML = 'Resultado: ' + val
}

function check() {
    switch (document.querySelector('#fruitTxt').value.toLowerCase()) {
        case 'laranja':
        case 'limão':
        case 'abacaxi':
        case 'uva':
        case 'maracujá':
        case 'manga':
            chRes('melhor para suco')
            break;
        case 'banana':
        case 'mamão':
        case 'melão':
        case 'pêssego':
        case 'abacate':
            chRes('melhor para vitamina')
            break;
        default:
            chRes('procure um nutricionista')
            break;
    }
}