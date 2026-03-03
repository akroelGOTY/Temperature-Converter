// testando javascript
console.log("JavaScript funcionando!");

// FUNÇÃO DE CONVERSÃO
function converter() {

    // VARIÁVEIS
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const resultado = document.getElementById("resultText");

    // LÓGICA DE CONVERSÃO
    // CONVERSÃO DE FAHRENHEIT PARA CELSIUS E KELVIN
    switch (fahrenheitInput.selected) {
        case true:
            const fahrenheitValue = parseFloat(document.getElementById("inputValue").value);
            const fahrenheitToCelsius = (fahrenheitValue - 32) * 5 / 9;
            const fahrenheitToKelvin = (fahrenheitValue - 32) * 5 / 9 + 273.15;
            resultado.textContent = `${fahrenheitValue} °F = ${fahrenheitToCelsius.toFixed(2)} °C | ${fahrenheitToKelvin.toFixed(2)} K`;
            break;
    }

    // CONVERSÃO DE CELSIUS PARA FAHRENHEIT E KELVIN
    switch (celsiusInput.selected) {
        case true:
            const celsiusValue = parseFloat(document.getElementById("inputValue").value);
            const celsiusToFahrenheit = (celsiusValue * 9 / 5) + 32;
            const celsiusToKelvin = celsiusValue + 273.15;
            resultado.textContent = `${celsiusValue} °C = ${celsiusToFahrenheit.toFixed(2)} °F | ${celsiusToKelvin.toFixed(2)} K`;
            break;
    }

    // CONVERSÃO DE KELVIN PARA FAHRENHEIT E CELSIUS
    switch (kelvinInput.selected) {
        case true:
            const kelvinValue = parseFloat(document.getElementById("inputValue").value);
            const kelvinToFahrenheit = (kelvinValue - 273.15) * 9 / 5 + 32;
            const kelvinToCelsius = kelvinValue - 273.15;
            resultado.textContent = `${kelvinValue} K = ${kelvinToFahrenheit.toFixed(2)} °F | ${kelvinToCelsius.toFixed(2)} °C`;
            break;
    }
}
