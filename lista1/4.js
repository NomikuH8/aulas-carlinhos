let num = 0 
let numA = 1
let numB = 0
let limit = 10

let soma = 0
for (let i = 0; i < limit; i++) {
    num = numA + numB
    numB = numA
    numA = num
    soma += num
}

document.writeln(soma)