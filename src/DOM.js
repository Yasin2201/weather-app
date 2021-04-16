const display = document.querySelector('#displayWeather')
const title = document.querySelector('#location')
const tempP = document.querySelector('#temp')
const feelsLikeP = document.querySelector('#feelsLike')
const humidityP = document.querySelector('#humidity')
const windSpeedP = document.querySelector('#windSpeed')

const printAddress = async (result) => {
    const place = await result;

    title.textContent = place.location
    tempP.textContent = `Temperature: ${place.temperature}°C`
    feelsLikeP.textContent = `Feels Like: ${place.feelsLike}°C`
    humidityP.textContent = `Humidity: ${place.humidity}%`
    windSpeedP.textContent = `Wind Speed: ${place.windSpeed} metres/sec`

    display.style.display = 'block'
    display.appendChild(title)
    display.appendChild(tempP)
    display.appendChild(feelsLikeP)
    display.appendChild(humidityP)
    display.appendChild(windSpeedP)

};

function displayError() {
    title.textContent = 'Error - Invalid Location Input'
    tempP.textContent = ''
    feelsLikeP.textContent = ''
    humidityP.textContent = ''
    windSpeedP.textContent = ''
}

export { printAddress, displayError }
