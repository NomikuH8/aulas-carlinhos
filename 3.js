function celsiusToFahrenheit() {
    let temperature = Number(document.querySelector("#celsius").value)
    document.querySelector("#fahrenheit").value = (temperature * 9/5) + 32
}

function fahrenheitToCelsius() {
    let temperature = Number(document.querySelector("#fahrenheit").value)
    document.querySelector("#celsius").value = (temperature - 32) * 5/9
}