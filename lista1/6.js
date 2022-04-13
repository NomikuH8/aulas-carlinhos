let mediaPassar = 7
let arrNotas = []
let media = 0

function check() {
    media = 0
    arrNotas = [
        document.querySelector('#nota1').value,
        document.querySelector('#nota2').value,
        document.querySelector('#nota3').value,
        document.querySelector('#nota4').value,
        document.querySelector('#nota5').value
    ]

    for (let i = 0; i < arrNotas.length; i++) {
        media += Number(arrNotas[i])
    }

    media /= arrNotas.length

    if (media >= 7)
        document.querySelector('#resultado').innerHTML = 'Resultado: média ' + media + '. Passou'
    else
        document.querySelector('#resultado').innerHTML = 'Resultado: média ' + media + '. Não passou'
}