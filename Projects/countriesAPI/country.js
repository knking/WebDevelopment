const mainSec=document.querySelector(".country-details")

const countryName = new URLSearchParams(location.search).get("name");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((country) => {

    const countryDetails = document.createElement('div')
    countryDetails.classList.add("country-details")

    const detailsHTML=` <img src="${country.flags.svg}" alt="img" />
        <div class="details-text-container">
          <h1>${country.name?.common}</h1>
          <div class="details-text">
            <p><b>Native Name: </b>${country.name.nativeName}</p>
                <p><b>Population: </b>${country.population}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Sub Region: </b>${country.subregion}</p>
                <p><b>Capital: </b>${country.capital}</p>
                <p><b>Top Level Domain: </b>${country.tld}</p>
                <p><b>Currencies: </b>${country.currencies}</p>
                <p><b>languages: </b>${country.languages}</p>
          </div>
          <div class="border-countries">
             <p><b>Border Country: </b> &nbsp;<a href="#">spain</a> <a href="#">jermeny</a> <a href="#">iceland</a></p>
          </div>
        </div>`
      
        countryDetails.innerHTML = detailsHTML
        mainSec.append(countryDetails)
    });
  });
