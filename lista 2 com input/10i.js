let cont = 0
let names = []

function main() {
    while (cont < 15) {
        let input = document.querySelector("#city-input").value
        names.push(input)
        cont++
        break
    }

    document.querySelector('#nameWrapper').remove()
    let wrapper = document.createElement('div')
    wrapper.id = 'nameWrapper'
    document.body.append(wrapper)

    console.log(names.sort().reverse())
    for (let i of names.sort().reverse()) {
        let elmt = document.createElement('p')
        elmt.innerHTML = i
        wrapper.appendChild(elmt)
    }
}