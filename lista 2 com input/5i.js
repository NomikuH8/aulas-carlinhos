let cont = 0
let numbers = []
let primes = []
let primesSum = 0

function main() {
    while (cont < 15) {
        let input = Number(document.querySelector("#num-input").value)
        numbers.push(Number(input))
        cont++

        if (checkPrime(input)) {
            primes.push(input)
            primesSum += input
        }
        break  
    } 

    document.querySelector('#numbers').innerHTML = numbers
    document.querySelector('#primes').innerHTML = primes
    document.querySelector('#primes').innerHTML += `. Totalizando ${primes.length} número(s)`
    document.querySelector('#primesSum').innerHTML = primesSum
}

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false
    }

    return true
}