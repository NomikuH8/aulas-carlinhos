function main() {
    let cont = 0
    let people = []

    while (cont < 15) {
        // ler a resposta do usuário
        let input = prompt('Insira uma altura e peso: (deve ser altura e peso, e.x.: "180 83") (falta mais ' + (15 - cont) + ' números)')

        // let height = input.split('/')[0]
        // let weight = input.split('/')[1]
        let height = input.split(' ')[0]
        let weight = input.split(' ')[1]
        people.push({
            'height': height,
            'weight': weight
        })
        cont++
    }

    let over90kg = 0
    let smallHei = 0
    let mediumHei = 0
    let bigHei = 0
    for (let i of people) {
        if (i['height'] < 160) smallHei++
        else if (i['height'] <= 185) mediumHei++
        else bigHei++

        if (i['weight'] >= 90)
            over90kg++
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