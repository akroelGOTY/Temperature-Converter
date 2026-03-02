// testando javascript
console.log("JavaScript funcionando!");

// FUNÇÃO DE CONVERSÃO
function converter() {

    // VARIÁVEIS
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultado = document.getElementById("resultText");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");

    // LÓGICA DE CONVERSÃO
    switch (fahrenheitInput.selected) {
        case true:
            const fahrenheitValue = parseFloat(document.getElementById("inputValue").value);
            const celsiusResult = (fahrenheitValue - 32) * 5 / 9;
            const kelvinResult = (celsiusResult + 273.15);
            resultado.textContent = `${fahrenheitValue}° F = ${celsiusResult.toFixed(2)}° C | ${kelvinResult.toFixed(2)}° K`;
            break;
        case false:
            const kelvinInput = parseFloat(document.getElementById("inputValue").value);
            const kelvinFromCelsius = (kelvinInput - 273.15);
            const kelvinFromFahrenheit = (kelvinInput - 273.15) * (9/5) + 32;
            resultado.textContent = `${kelvinInput}° K = ${kelvinFromCelsius.toFixed(2)}° C | ${kelvinFromFahrenheit.toFixed(2)}° F`;
            break;
        default:
            resultado.textContent = "Selecione uma unidade de temperatura para converter.";
    }

    switch (celsiusInput.selected) {
        case true:
            const celsiusValue = parseFloat(document.getElementById("inputValue").value);
            const fahrenheitResult = (celsiusValue * 9 / 5) + 32;
            const kelvinResultFromCelsius = (celsiusValue + 273.15);
            resultado.textContent = `${celsiusValue}° C = ${fahrenheitResult.toFixed(2)}° F | ${kelvinResultFromCelsius.toFixed(2)}° K`;
            break;
        case false:
            const kelvinInputFromCelsius = parseFloat(document.getElementById("inputValue").value);
            const celsiusFromKelvin = (kelvinInputFromCelsius - 273.15);
            const fahrenheitFromKelvin = (celsiusFromKelvin * 9 / 5) + 32;
            resultado.textContent = `${kelvinInputFromCelsius}° K = ${celsiusFromKelvin.toFixed(2)}° C | ${fahrenheitFromKelvin.toFixed(2)}° F`;
            break;
        default:
            resultado.textContent = "Selecione uma unidade de temperatura para converter.";
    }

        switch (kelvinInput.selected) {
            case true:
                const kelvinValue = parseFloat(document.getElementById("inputValue").value);
                const celsiusResultFromKelvin = (kelvinValue - 273.15);
                const fahrenheitResultFromKelvin = (celsiusResultFromKelvin * 9 / 5) + 32;
                resultado.textContent = `${kelvinValue}° K = ${celsiusResultFromKelvin.toFixed(2)}° C | ${fahrenheitResultFromKelvin.toFixed(2)}° F`;
                break;
            case false:
                const celsiusInputFromKelvin = parseFloat(document.getElementById("inputValue").value);
                const kelvinFromCelsius = (celsiusInputFromKelvin + 273.15);
                const fahrenheitFromCelsius = (celsiusInputFromKelvin * 9 / 5) + 32;
                resultado.textContent = `${celsiusInputFromKelvin}° C = ${kelvinFromCelsius.toFixed(2)}° K | ${fahrenheitFromCelsius.toFixed(2)}° F`;
                break;
            default:
                resultado.textContent = "Selecione uma unidade de temperatura para converter.";
        }
}