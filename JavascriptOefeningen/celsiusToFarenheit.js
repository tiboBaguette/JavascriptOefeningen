// (0°C × 9/5) + 32 = 32°F
let celsiusToFarenheit = function(tempCelsius) {
    return (tempCelsius * 9/5) + 32
}

let tempFarenheit = celsiusToFarenheit(5)
console.log(tempFarenheit)