// const apiKey = "026ffa503460be801ee9a710edd85007";
const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=d2d2708ebffb48bfb3d124500232505";


export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};