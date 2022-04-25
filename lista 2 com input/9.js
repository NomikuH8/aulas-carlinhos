let names = []
let wrapper = document.querySelector('#nameWrapper')

function main() {
    while (true) {
        let input = document.querySelector("#name-input").value
        if (input.match('sair') !== null)
            break

        names.push(input)
        break
    }

    document.querySelector('#nameWrapper').remove()
    let wrapper = document.createElement('div')
    wrapper.id = 'nameWrapper'
    document.body.append(wrapper)

    for (let i of names.sort()) {
        let elmt = document.createElement('p')
        elmt.innerHTML = i
        wrapper.appendChild(elmt)
    }
}