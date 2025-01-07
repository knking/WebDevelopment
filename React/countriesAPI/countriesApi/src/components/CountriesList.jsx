import { useState } from "react";
import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";

function CountriesList({query}) {
  

  return (
    <>
      <div className="countries-container">
        {CountriesData.filter((country) =>
          country.name.common.toLowerCase().includes(query)
        ).map((country, key) => {
          return (
            <CountryCard
              key={key}
              name={country.name?.common}
              imgUrl={country.flags?.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
            />
          );
        })}
      </div>
    </>
  );
}

export default CountriesList;
