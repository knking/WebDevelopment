
const apiKey ="026ffa503460be801ee9a710edd85007"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector(".input-box")
const btn = document.querySelector(".searchBtn")

btn.addEventListener('click',()=>{
    checkWeather(inputBox.value) 
   // console.log(inputBox.value) 
})




async function checkWeather(city){
    const responce = await fetch(apiUrl+ city + `&appid=${apiKey}`)
    let data = await responce.json()

    console.log(data)
    document.querySelector(".city").innerText = data.name
    document.querySelector(".temp").innerText = Math.round(data.main?.temp) + "°C"
    document.querySelector(".Humidity").innerText = data.main?.humidity + "%"
    document.querySelector(".wind").innerText = data.wind.speed + " km/h"
}
