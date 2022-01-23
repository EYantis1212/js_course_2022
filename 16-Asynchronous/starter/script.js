'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

///////////////////////////////////////
//////////START SECTION 16 ////////////////////

// Old School Way
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}M people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//     </div>
//     </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

//Callback hell function
const renderCountry = function (data, classname = '') {
  const html = `
		<article class="country ${classname}">
		<img class="country__img" src="${data.flags.png}" />
		<div class="country__data">
			<h3 class="country__name">${data.name.common}</h3>
			<h4 class="country__region">${data.region}</h4>
			<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
        1
      )}M people</p>
			<p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
			<p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
		</div>
		</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
// const getCountryAndNeighbor = function (country) {
//   // AJAX call Country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // Render Country 1
//     renderCountry(data);

//     //Get Neighbor Country
//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     // AJAX Call Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       //Render Neighbor
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbor('usa');
// getCountryAndNeighbor('russia');

// MODERN WAY WITH PROMISES COMPARISON

// const getCountryData = function (country) {
//   return fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`${errorMsg} (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong... ${err.message}, Try again.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', e => getCountryData('usa'));

// REFACTORED WITH ERROR HANDLING
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`Country not found (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders;
      if (!neighbour) throw new Error('No Neighbor Found');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
        'Country not Found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong... ${err.message}, Try again.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', e => getCountryData('australia'));
