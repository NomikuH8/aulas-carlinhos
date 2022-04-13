function calcArea() {
    let base = Number(document.querySelector('#triangleBase').value)
    let height = Number(document.querySelector('#triangleHeight').value)

    let area = (base * height) / 2

    document.querySelector('#result').innerHTML = 'A área do triângulo é: ' + area
}