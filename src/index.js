import { printAddress } from './DOM'
import { getWeather, getUserInput } from './weather'

const searchBtn = document.querySelector('#searchBtn')

searchBtn.addEventListener('click', () => {
    const userInput = getUserInput()
    const result = getWeather(userInput)
    printAddress(result);

})

