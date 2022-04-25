let yo25 = 0
let yo50 = 0
let yo75 = 0
let yo99 = 0

function main() {

    while (true) {
        let input = document.querySelector("#age-input").value

        if (input <= 25) yo25++
        else if (input <= 50) yo50++
        else if (input <= 75) yo75++
        else yo99++  
        break
    }

    document.querySelector('#till25').innerHTML = `Até 25 anos: ${yo25}`
    document.querySelector('#till50').innerHTML = `Até 50 anos: ${yo50}`
    document.querySelector('#till75').innerHTML = `Até 75 anos: ${yo75}`
    document.querySelector('#till99').innerHTML = `Até 100 anos: ${yo99}`
}

main()