function calcArea() {
    let bigBase = Number(document.querySelector('#bigTrapezoidBase').value)
    let smallBase = Number(document.querySelector('#smallTrapezoidBase').value)
    let height = Number(document.querySelector('#trapezoidHeight').value)

    let area = ((smallBase + bigBase) * height) / 2

    document.querySelector('#result').innerHTML = 'A área do trapézio é: ' + area
}