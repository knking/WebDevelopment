const apiKey = "026ffa503460be801ee9a710edd85007";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector(".input-box");
const btn = document.querySelector(".searchBtn");
const imageIcon = document.querySelector(".weather-img");
const weather = document.querySelector(".weather");
btn.addEventListener("click", () => {
  checkWeather(inputBox.value);
  // console.log(inputBox.value)
});

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    weather.style.display = "none";
  }
  else{
    let data = await responce.json();

    weather.style.display = "block";
  
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main?.temp) + "°C";
    document.querySelector(".Humidity").innerText = data.main?.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";
  
    if (data.weather[0].main == "Clear") {
      imageIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      imageIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      imageIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      imageIcon.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      imageIcon.src = "./images/Rain.png";
    } else if (data.weather[0].main == "Snow") {
      imageIcon.src = "./images/snow.png";
    } else if (data.weather[0].main == "Wind") {
      imageIcon.src = "./images/wind.png";
    }
  }
  
}
