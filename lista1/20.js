document.write('<h1>Transposição de matriz 5x5</h1>')
let wrapper = document.createElement('div')
document.querySelector('body').appendChild(wrapper)

for (let i = 0; i < 26; i++) {
    let elmt = document.createElement('input')
    elmt.type = 'number'
    elmt.id = 'campo' + i
    wrapper.appendChild(elmt)
}