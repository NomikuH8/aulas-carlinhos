let cont = 0
let numbers = []

function main() {
    while (cont < 15) {
        let input = document.querySelector("#num-input").value
        numbers.push(Number(input))
        document.querySelector("#num-input").value = ''
        cont++
        break
    }
numbers.sort((a, b) => { return a - b })

document.querySelector('#min').innerHTML = 'Menor: ' + numbers[0]
document.querySelector('#max').innerHTML = 'Maior: ' + numbers[numbers.length - 1]
document.querySelector('#numbers').innerHTML = numbers
}
    


