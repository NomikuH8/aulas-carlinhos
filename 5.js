function volumeCalc() {
    const pi = 3.14159265359 

    let radius = Number(document.querySelector('#radius').value)
    let height = Number(document.querySelector('#height').value)

    let result =   (pi * (radius ** 2)) * height

    document.querySelector('#result').innerHTML = 'O volume do cilindro é: ' + result
}