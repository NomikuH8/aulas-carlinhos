let cont = 0
let numbers = []
let divisible = []

function main() {
    while (cont < 15) {
        let input = Number(document.querySelector("#num-input").value)
        numbers.push(input)
        document.querySelector("#num-input").value = ''
        cont++

        if (input != 0 && input % 7 === 0) {
            divisible.push(input)
            break
        }
        else break
    }


    document.querySelector('#numbers').innerHTML = numbers
    document.querySelector('#divisible').innerHTML = divisible
    document.querySelector('#divisible').innerHTML += `. Totalizando ${divisible.length} número(s)`
}