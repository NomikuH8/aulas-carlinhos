function main() {
    let cont = 0
    let numbers = []
    while (cont < 15) {
        let input = prompt('Insira um número: (falta mais ' + (15 - cont) + ' números)')
        if (input.match(/\D+/gm) !== null) {
            alert('Você precisa inserir um número, sem caracteres especiais ou letras!')
            continue
        }

        numbers.push(Number(input))
        cont++
    }

    numbers.sort((a, b) => { return a - b })

    document.querySelector('#min').innerHTML = 'Menor: ' + numbers[0]
    document.querySelector('#max').innerHTML = 'Maior: ' + numbers[numbers.length - 1]
    document.querySelector('#numbers').innerHTML = numbers
}

main()