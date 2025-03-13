import WeatherContext from "./WeatherContext";
import { useState } from "react";
import { getWeatherDataForCountry } from "../api";
const WeatherContextProvider = ({ children }) => {
    
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async (searchCity="delhi") => {
        const response = await getWeatherDataForCountry(searchCity);
        console.log("i m the searching city ", searchCity);
        console.log(data);
        setData(response);
        
      };

  return(
    <WeatherContext.Provider value={{searchCity,setSearchCity,data,setData,fetchData}}>
        {children}
    </WeatherContext.Provider>
  )
};

export default WeatherContextProvider;

// export const Weatherprovider = ({ children }) => {
//     const [data, setData] = useState(null);
//     const [searchCity, setSearchCity] = useState(null);

//     const fetchData = async (searchCity) => {

//       const response = await getWeatherDataForCountry(searchCity);

//       console.log("i m the searching city ", searchCity);
//       setData(response);
//       console.log(data);

//     };

//     return (
//       <WeatherContext.Provider
//         value={{ data, setData, searchCity, setSearchCity, fetchData }}
//       >
//         {children}
//       </WeatherContext.Provider>
//     );
//   };
