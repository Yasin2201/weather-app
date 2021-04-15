import printAddress from './DOM'
import { getWeather, getUserInput } from './weather'


const searchBtn = document.querySelector('#searchBtn')

searchBtn.addEventListener('click', () => {
    const result = getWeather(getUserInput())
    printAddress(result);

})

