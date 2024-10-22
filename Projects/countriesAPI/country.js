const mainSec=document.querySelector(".country-details")
const imgSrc=document.querySelector(".country-details img")
const h1=document.querySelector(".h1")
const population=document.querySelector(".population")
const region=document.querySelector(".region")
const subregion = document.querySelector(".subregion")
const capital = document.querySelector(".capital")
const native=document.querySelector(".native")
const tld=document.querySelector(".tld")
const currencies=document.querySelector(".currencies")
const lan = document.querySelector(".lan")


const countryName = new URLSearchParams(location.search).get("name");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((response) => {
    return response.json();
  })
  .then(([country]) => {
    imgSrc.src=`${country.flags.svg}`
    h1.innerText=country.name?.common
    if(country.name.nativeName){
        native.innerText=Object.values(country.name.nativeName)[0].common
    }
    else{
        native.innerText=country.name?.common
    }
    population.innerText=country.population
    region.innerText=country.region
    subregion.innerText=country.subregion
    capital.innerText=country.capital
    tld.innerText=country.tld
    currencies.innerText = Object.values(country.currencies)[0].name
    lan.innerText=Object.values(country.languages)[0]
    console.log(Object.values(country.languages)[0]);

    
    // data.forEach((country) => {

    // const countryDetails = document.createElement('div')
    // countryDetails.classList.add("country-details")

    // const detailsHTML=` <img src="${country.flags.svg}" alt="img" />
    //     <div class="details-text-container">
    //       <h1>${country.name?.common}</h1>
    //       <div class="details-text">
    //         <p><b>Native Name: </b>${country.name.nativeName}</p>
    //             <p><b>Population: </b>${country.population}</p>
    //             <p><b>Region: </b>${country.region}</p>
    //             <p><b>Sub Region: </b>${country.subregion}</p>
    //             <p><b>Capital: </b>${country.capital}</p>
    //             <p><b>Top Level Domain: </b>${country.tld}</p>
    //             <p><b>Currencies: </b>${country.currencies}</p>
    //             <p><b>languages: </b>${country.languages}</p>
    //       </div>
    //       <div class="border-countries">
    //          <p><b>Border Country: </b> &nbsp;<a href="#">spain</a> <a href="#">jermeny</a> <a href="#">iceland</a></p>
    //       </div>
    //     </div>`
      
    //     countryDetails.innerHTML = detailsHTML
    //     mainSec.append(countryDetails)
    // });
  })
  .catch((err)=>{
    console.log(err);
    
  })
