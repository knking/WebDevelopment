import React from "react";

function CountryCard({name,imgUrl,population,region,capital}) {
  return (
    <a href={`/country.html?name=${name.common}`} className="country-card">
      <img src={imgUrl} alt={name + 'flag'}/>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>{population}</p>
        <p>
          <b>Region: </b>{region}</p>
        <p>
          <b>Capital: </b>{capital}</p>
      </div>
    </a>
  );
}

export default CountryCard;
