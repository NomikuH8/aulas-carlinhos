let cont = 0
// todos os numeros
let numbers = []
// impares
let oddNumbers = []
let sumOdd = 0
// pares
let evenNumbers = []
let sumEven = 0

function main() {
    while (cont < 15) {
        let input = document.querySelector("#num").value
        numbers.push(Number(input))
        document.querySelector("#num").value = ''
        cont++

        if (Number(input) % 2 == 0) {
            evenNumbers.push(Number(input))
            sumEven += Number(input)
            break
        }
        else {
            oddNumbers.push(Number(input))
            sumOdd += Number(input)
            break
        }
    }


    document.querySelector('#odd').innerHTML = 'Soma dos ímpares: ' + sumOdd
    document.querySelector('#even').innerHTML = 'Soma dos pares: ' + sumEven
    document.querySelector('#numbers').innerHTML = numbers
}