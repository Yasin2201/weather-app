const display = document.querySelector('#displayWeather')
const title = document.querySelector('#placeName')
const tempP = document.querySelector('#temp')
const feelsLikeP = document.querySelector('#feelsLike')
const humidityP = document.querySelector('#humidity')
const windSpeedP = document.querySelector('#windSpeed')

const printAddress = async (result) => {
    const a = await result;

    title.textContent = a.place
    tempP.textContent = `Temperature: ${a.temperature}°C`
    feelsLikeP.textContent = `Feels Like: ${a.feelsLike}°C`
    humidityP.textContent = `Humidity: ${a.humidity}%`
    windSpeedP.textContent = `Wind Speed: ${a.windSpeed} metres/sec`

    display.style.display = 'block'
    display.appendChild(title)
    display.appendChild(tempP)
    display.appendChild(feelsLikeP)
    display.appendChild(humidityP)
    display.appendChild(windSpeedP)

};

export default printAddress
