
const apiKey ="026ffa503460be801ee9a710edd85007"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric";

async function checkWeather(){
    const responce = await fetch(apiUrl+`appid=${apiKey}`)
    let data = await responce.json()

    console.log(data)
}