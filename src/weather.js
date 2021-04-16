import { displayError } from './DOM'

const searchBar = document.querySelector('#searchBar');

function getUserInput() {
    const userSearch = searchBar.value;
    return userSearch
}

async function getWeather(city) {
    const findWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=cf6ba3ae4d919cedffb4f6a175c9a705`
    try {
        const response = await fetch(findWeather, { mode: 'cors' });

        const getData = await response.json();

        const weatherData = {
            location: getData.name,
            temperature: getData.main.temp,
            feelsLike: getData.main.feels_like,
            humidity: getData.main.humidity,
            windSpeed: getData.wind.speed,
        }
        return weatherData
    }

    catch (err) {
        console.error('Error - Invalid Location Input')
        displayError()
    }
}

export { getWeather, getUserInput }
