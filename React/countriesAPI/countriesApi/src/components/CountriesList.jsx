
import CountriesData from "../CountriesData"
import CountryCard from "./CountryCard"
function CountriesList() {

    const array = CountriesData.map((country,key)=>{
        return <CountryCard key={key} 
        name={country.name?.common} 
        imgUrl ={country.flags?.svg} 
        population={country.population.toLocaleString('en-IN')} 
        region = {country.region}
        capital = {country.capital?.[0]}/>
    })
  return (
    <div className="countries-container">
    {
       array

    }
  </div>
  )
}

export default CountriesList