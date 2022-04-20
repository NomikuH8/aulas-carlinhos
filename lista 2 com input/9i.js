let names = []
let cont = Number(document.querySelector("length").value)
let i = 0
console.log(cont)

function main() {
    while (i < cont) {
        let input = document.querySelector("#name-input").value
        names.push(input)
        i++
        break
    }

    let wrapper = document.querySelector('#nameWrapper')
    for (let i of names.sort()) {
        let elmt = document.createElement('p')
        elmt.innerHTML = i
        wrapper.appendChild(elmt)
    }
}