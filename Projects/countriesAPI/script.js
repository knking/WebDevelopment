const countriesContainer = document.querySelector(".countries-container")
const countryCard=document.createElement("a")
const img=document.createElement('img')
const div=document.createElement('div')
const h3=document.createElement('h3')
const p=document.createElement('p')


countryCard.classList.add('country-card')
div.classList.add('card-text')
h3.classList.add('card-title')


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
  .then((data) => {
    data.forEach((country) => {
        console.log(country.flags.svg);
        img.src=`${country.flags.svg}`
        h3.innertext=`${country.name.common}`
        p.innerHTML=`<b> ${country.population}</b>`
        div.appendChild(h3,p)
        countryCard.appendChild(img,div)
        countriesContainer.appendChild(countryCard)
    document.body.append(countriesContainer)
    });
  })
  .catch((error) => {
    console.log(error);
  });

 