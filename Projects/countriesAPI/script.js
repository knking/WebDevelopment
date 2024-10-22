const countriesContainer = document.querySelector(".countries-container");

const filterByName = document.querySelector(".filter-by-name")

const url = "https://restcountries.com/v3.1/all";

// async function countryData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// countryData();

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then(renderCountries)
  .catch((error) => {
    console.log(error);
  });

  filterByName.addEventListener('change',(e)=>{
    
    fetch(`https://restcountries.com/v3.1/region/${filterByName.value}`)
  .then((response) => {
    return response.json();
  })
  .then(renderCountries)
  .catch((error) => {
    console.log(error);
  });
    
  })

  function renderCountries(data){
    countriesContainer.innerHTML = ''
    data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href=`./country.html?name=${country.name.common}`
      const cardHTML = ` 
                <img src="${country.flags.svg}" alt="flag">
                <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${(country.population).toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
                </div>`;
                
      countryCard.innerHTML = cardHTML;
      countriesContainer.append(countryCard);
      
    })
  }