(()=>{"use strict";const e=document.querySelector("#displayWeather"),t=document.querySelector("#location"),n=document.querySelector("#temp"),o=document.querySelector("#feelsLike"),i=document.querySelector("#humidity"),a=document.querySelector("#windSpeed"),r=document.querySelector("#searchBar");document.querySelector("#searchBtn").addEventListener("click",(()=>{(async r=>{const c=await r;t.textContent=c.location,n.textContent=`Temperature: ${c.temperature}°C`,o.textContent=`Feels Like: ${c.feelsLike}°C`,i.textContent=`Humidity: ${c.humidity}%`,a.textContent=`Wind Speed: ${c.windSpeed} metres/sec`,e.style.display="block",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(a)})(async function(e){const r=`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&APPID=cf6ba3ae4d919cedffb4f6a175c9a705`;try{const e=await fetch(r,{mode:"cors"}),t=await e.json(),n={location:t.name,temperature:t.main.temp,feelsLike:t.main.feels_like,humidity:t.main.humidity,windSpeed:t.wind.speed};return console.log(n),n}catch(e){console.error("Error - Invalid Location Input"),t.textContent="Error - Invalid Location Input",n.textContent="",o.textContent="",i.textContent="",a.textContent=""}}(r.value))}))})();