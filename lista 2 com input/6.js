let cont = 0
let over90kg = 0
let smallHei = 0
let mediumHei = 0
let bigHei = 0

function main() {
    while (cont < 15) {
        let input = document.querySelector("#info-input").value
        
        let height = input.split(' ')[0]
        console.log(height)
        let weight = input.split(' ')[1]
        
        if (height < 160) smallHei++
        else if (height <= 185) mediumHei++
        else bigHei++
        
        if (weight >= 90)
        over90kg++
        
        cont++
        break
    }

    document.querySelector('#people').innerHTML = `Estatura baixa: ${smallHei} / `
    document.querySelector('#people').innerHTML += `Estatura média: ${mediumHei} / `
    document.querySelector('#people').innerHTML += `Estatura alta: ${bigHei} / `
    document.querySelector('#people').innerHTML += `Acima de 90kg: ${over90kg}`
}

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false
    }

    return true
}

main()