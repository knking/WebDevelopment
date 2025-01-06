import React from "react";

function CountryCard() {
  return (
    <a href="/country.html?name=Barbados" className="country-card">
      <img src="https://flagcdn.com/bb.svg" alt="barbados-flag" />
      <div className="card-text">
        <h3 className="card-title">Barbados</h3>
        <p>
          <b>Population: </b>23,45,666</p>
        <p>
          <b>Region: </b>Americas</p>
        <p>
          <b>Capital: </b>Bridgetown</p>
      </div>
    </a>
  );
}

export default CountryCard;
