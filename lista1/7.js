function calcConsumerCost() {
    let factoryCost = Number(document.querySelector('#factoryCost').value)

    let consumerCost = (factoryCost + (factoryCost * 0.45) + (factoryCost * 0.28))
    console.log(consumerCost)
    document.querySelector('#result').innerHTML = 'O valor do carro para o consumidor é R$' + consumerCost
}