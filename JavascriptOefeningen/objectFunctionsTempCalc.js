// F to C: (32°F − 32) × 5/9 = 0°C
// F to K: (32°F − 32) × 5/9 + 273.15 = 273,15K

let getTemperatureByFahrenheit = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

    return {
        tempFahrenheit: `The temperature in fahrenheit is ${fahrenheit}`,
        tempCelsius: `The temperature in celsius is ${celsius}`,
        tempKelvin: `The temperature in kelvin is ${kelvin}`,
    }
}

let temperature = getTemperatureByFahrenheit(32)

console.log(temperature.tempCelsius)
console.log(temperature.tempFahrenheit)
console.log(temperature.tempKelvin)