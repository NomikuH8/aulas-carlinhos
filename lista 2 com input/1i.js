let pass = '2108'
let tries = 5

function main() {
    while (tries != 0) {
        let passInput = document.querySelector("#password").value
        if (passInput !== pass) {
            tries--
            alert('Senha Incorreta')
            break
        }

        alert('Senha Correta')
        break
    }

    if (tries <= 0) {
        alert('Senha Incorreta e tentativas chegaram a 0, reinicie o programa')
        return
    }

    alert('Senha Correta! Tentativas que sobraram: ' + tries)
}
