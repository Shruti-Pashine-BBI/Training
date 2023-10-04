// // // // let globalVariable;

// // // // //const str = document.getElementById("country-name").value;

// // // // const loadCountryAPI = () => {
// // // //   fetch(`https://restcountries.com/v3.1/all`)
// // // //     .then((res) => res.json())

// // // //     .then((data) => {
// // // //       globalVariable = data;

// // // //       console.log(data);
// // // //     })

// // // //     .catch((error) => {
// // // //       console.log("Unable to Fetch Data");
// // // //     });
// // // // };

// // // // loadCountryAPI();

// // // // const ExchangeAPI = () => {
// // // //   fetch(
// // // //     `https://v6.exchangerate-api.com/v6/cf6fe21bc2c09627b9f7e087/latest/USD`
// // // //   )
// // // //     .then((res) => res.json())

// // // //     .then((data) => {
// // // //       globalVariable = data;

// // // //       console.log(data);
// // // //     })

// // // //     .catch((error) => {
// // // //       console.log("Unable to Fetch Data");
// // // //     });
// // // // };

// // // // ExchangeAPI();

// // // function fetchCurrencyInfo(countryCode) {
// // //   fetch(`https://restcountries.com/v3.1/${countryCode}`)
// // //     .then((response) => response.json())

// // //     .then((data) => {
// // //       const currencyInfo = data[0].currencies[0];
// // //       document.getElementById(
// // //         "currencyInfo"
// // //       ).textContent = `Currency: ${currencyInfo.name} (${currencyInfo.code})`;
// // //     })

// // //     .catch((error) => {
// // //       console.error("Error fetching currency information:", error);

// // //       document.getElementById("currencyInfo").textContent =
// // //         "Error fetching currency information";
// // //     });
// // // }

// // // function fetchExchangeRates(baseCurrency, targetCurrency) {
// // //   fetch(
// // //     `https://v6.exchangerate-api.com/v6/3e9c29e25e850b90602ac642/latest?base=${baseCurrency}&symbols=${targetCurrency}`,
// // //     {
// // //       headers: {
// // //         Authorization: "Bearer 3e9c29e25e850b90602ac642",
// // //       },
// // //     }
// // //   )
// // //     .then((response) => response.json())

// // //     .then((data) => {
// // //       const exchangeRate = data.rates[targetCurrency];

// // //       // Display the exchange rate in the HTML
// // //       document.getElementById(
// // //         "exchangeRate"
// // //       ).textContent = `Exchange Rate: 1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
// // //     })

// // //     .catch((error) => {
// // //       console.error("Error fetching exchange rates:", error);

// // //       // Display an error message to the user

// // //       document.getElementById("exchangeRate").textContent =
// // //         "Error fetching exchange rates";
// // //     });
// // // }

// // // // Handle user interactions, calculate exchange rates, and display results

// // // document.getElementById("compareButton").addEventListener("click", function () {
// // //   // Get selected countries from dropdowns

// // //   const country1 = document.getElementById("country1").value;

// // //   const country2 = document.getElementById("country2").value;

// // //   // Fetch currency information for the selected countries

// // //   fetchCurrencyInfo(country1);

// // //   fetchCurrencyInfo(country2);

// // //   // Fetch exchange rates and calculate exchange rate between the selected currencies

// // //   fetchExchangeRates(country1, country2);
// // // });
// // let currencyData; // Create a variable to store currency data

// // function loadCurrencyAPI() {
// //   fetch(`https://restcountries.com/v3.1/all`)
// //     .then((res) => res.json())

// //     .then((data) => {
// //       // Extract and store currency data from the API response

// //       currencyData = data.map((country) => ({
// //         name: country.name.common,

// //         currencies: country.currencies,
// //       }));

// //       populateCountryDropdowns();
// //     })

// //     .catch((error) => {
// //       console.log("Unable to Fetch Currency Data");
// //     });
// // }

// // function populateCountryDropdowns() {
// //   const countryDropdown1 = document.getElementById("country1");

// //   const countryDropdown2 = document.getElementById("country2");

// //   for (const country of currencyData) {
// //     const option1 = document.createElement("option");

// //     option1.value = country.name;

// //     option1.textContent = country.name;

// //     const option2 = document.createElement("option");

// //     option2.value = country.name;

// //     option2.textContent = country.name;

// //     countryDropdown1.appendChild(option1);

// //     countryDropdown2.appendChild(option2);
// //   }
// // }

// // // Modify the event listener to use currencyData

// // document.getElementById("compareButton").addEventListener("click", function () {
// //   const country1 = document.getElementById("country1").value;

// //   const country2 = document.getElementById("country2").value;

// //   const country1Info = currencyData.find(
// //     (country) => country.name === country1
// //   );

// //   const country2Info = currencyData.find(
// //     (country) => country.name === country2
// //   );

// //   if (country1Info && country2Info) {
// //     document.getElementById(
// //       "currencyInfo"
// //     ).textContent = `Currency 1: ${country1Info.currencies.name} \n Currency 2: ${country2Info.currencies.name}`;
// //   } else {
// //     document.getElementById("currencyInfo").textContent =
// //       "Invalid countries selected";
// //   }
// // });

// // // Initialize the currency data

// // loadCurrencyAPI();
// let countryData;
// function loadCountryAPI() {
//   fetch(`https://restcountries.com/v3.1/all`)
//     .then((res) => res.json())
//     .then((data) => {
//       countryData = data;
//       // countryData = data.map((country) => ({
//       //   name: country.name.common,
//       //   currencies: country.currencies,
//       // }));
//       console.log(countryData);
//       populateCountryDropdowns();
//     })

//     .catch((error) => {
//       console.log(error);
//     });
// }

// function populateCountryDropdowns() {
//   const countryDropdown1 = document.getElementById("country1");
//   const countryDropdown2 = document.getElementById("country2");
//   for (const country of countryData) {
//     const option1 = document.createElement("option");
//     option1.value = country.name.common;
//     //console.log(option1);
//     //console.log(countryData);
//     //console.log(country);
//     option1.textContent = country.name.common;
//     const option2 = document.createElement("option");
//     //console.log(country.currencies);
//     //console.log(country.name.common);
//     option2.value = Object.keys(country.currencies || "NA");
//     //console.log(option2.value);
//     option2.textContent = country.name.common;
//     //console.log(option2);
//     // console.log("this", country.name.common);
//     countryDropdown1.appendChild(option1);
//     countryDropdown2.appendChild(option2);
//   }
// }
// function fetchExchangeRates(baseCurrency, targetCurrency) {
//   fetch(
//     `https://v6.exchangerate-api.com/v6/3e9c29e25e850b90602ac642/latest/${targetCurrency}`
//   )
//     .then((res) => res.json())

//     .then((data) => {
//       const exchangeRate = data.conversion_rates[targetCurrency];
//       console.log(baseCurrency);
//       document.getElementById(
//         "exchangeRate"
//       ).textContent = `Exchange Rate: 1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
//       // console.log(baseCurrency);
//     })

//     .catch((error) => {
//       console.log(error);
//     });
// }
// // function fetchExchangeRates() {
// //   fetch(
// //     ` https://v6.exchangerate-api.com/v6/3e9c29e25e850b90602ac642/latest/all`
// //   )
// //     .then((res) => res.json())
// //     .then((data) => {
// //       //console.log(data);
// //       const exchangeRate = data.conversion_rates.INR;
// //       console.log(exchangeRate);
// //       document.getElementById(
// //         "exchangeRate"
// //       ).textContent = `Exchange Rate: 1 = ${exchangeRate} `;
// //     })
// //     .catch((error) => {
// //       console.log("Unable to Fetch Country Data");
// //     });
// // }
// //console.log(countryData);
// //
// const compareButton = document
//   .getElementById("compareButton")
//   .addEventListener("click", function () {
//     const country1 = document.getElementById("country1").value;
//     const country2 = document.getElementById("country2").value;

//     //console.log(country1);
//     //console.log(country2);

//     //console.log(country1.name.common);
//     // console.log(countryData[0].name);

//     if (country1 && country2) {
//       document.getElementById(
//         "currencyInfo"
//       ).textContent = `Currency 1: ${country1} \n Currency 2: ${country2}`;
//       //console.log(country1);
//       //console.log("here", country1.currencies[0].name);
//       fetchExchangeRates(country1, country2);
//       localStorage.setItem("RestCountries", country1);
//       //console.log(localStorage.getItem("RestCountries", country1));

//       sessionStorage.setItem("Exchange", country2);
//       //console.log(country1.currencies);
//       //console.log(country2.currencies);
//     } else {
//       document.getElementById("currencyInfo").textContent =
//         "Invalid countries selected";
//     }
//   });

// loadCountryAPI();

// // let showUsers = (users) => {
// //   users.forEach((country) => {
// //     let storeData = country.name.common;
// //     //let id = user.id;

// //     console.log(showUsers);
// //     localStorage.setItem("allUsers", storeData);
// //   });
// // };
// // if (localStorage.getItem("allUsers")) {
// //   console.log(localStorage.getItem("allUsers"));
// // }
// // let showUsers = (users) => {
// //   users.forEach((country) => {
// //     let storeData = country.name.common;
// //     //let id = user.id;

// //     console.log(showUsers);
// //     localStorage.setItem("allUsers", storeData);
// //   });
// // };
// // if (localStorage.getItem("allUsers")) {
// //   console.log(localStorage.getItem("allUsers"));
// // }
// // localStorage.setItem("Data", res);
// // const localStore = localStorage.getItem("Data");
// // console.log(localStore);
// // const res1 = JSON.parse(localStore);
// // console.log(res1);
let countryData;
function loadCountryAPI() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => {
      countryData = data;
      // countryData = data.map((country) => ({
      //   name: country.name.common,
      //   currencies: country.currencies,
      // }));
      console.log(countryData);
      populateCountryDropdowns();
    })

    .catch((error) => {
      console.log(error);
    });
}

function populateCountryDropdowns() {
  //console.log("hii");
  const countryDropdown1 = document.getElementById("country1");
  const countryDropdown2 = document.getElementById("country2");
  for (const country of countryData) {
    const option1 = document.createElement("option");
    option1.value = country.name.common;
    //console.log(option1);
    //console.log(countryData);
    //console.log(country);
    option1.textContent = country.name.common;
    const option2 = document.createElement("option");
    //console.log(country.currencies);
    //console.log(country.name.common);
    option2.value = Object.keys(country.currencies || "NA");
    //console.log(option2.value);
    option2.textContent = country.name.common;
    //console.log(option2);
    // console.log("this", country.name.common);
    countryDropdown1.appendChild(option1);
    countryDropdown2.appendChild(option2);
  }
}
function fetchExchangeRates(baseCurrency, targetCurrency) {
  fetch(
    `https://v6.exchangerate-api.com/v6/3e9c29e25e850b90602ac642/latest/${targetCurrency}`
  )
    .then((res) => res.json())

    .then((data) => {
      const exchangeRate = data.conversion_rates[targetCurrency];
      // console.log(baseCurrency);
      document.getElementById(
        "exchangeRate"
      ).textContent = `Exchange Rate: 1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
      // console.log(baseCurrency);
    })

    .catch((error) => {
      console.log(error);
    });
}
// function fetchExchangeRates() {
//   fetch(
//     ` https://v6.exchangerate-api.com/v6/3e9c29e25e850b90602ac642/latest/all`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       //console.log(data);
//       const exchangeRate = data.conversion_rates.INR;
//       console.log(exchangeRate);
//       document.getElementById(
//         "exchangeRate"
//       ).textContent = `Exchange Rate: 1 = ${exchangeRate} `;
//     })
//     .catch((error) => {
//       console.log("Unable to Fetch Country Data");
//     });
// }
//console.log(countryData);
//
const compareButton = document
  .getElementById("compareButton")
  .addEventListener("click", function () {
    const country1 = document.getElementById("country1").value;
    const country2 = document.getElementById("country2").value;

    // console.log(country1);
    // console.log(country2);

    //console.log(country1.name.common);
    // console.log(countryData[0].name);

    if (country1 && country2) {
      document.getElementById(
        "currencyInfo"
      ).textContent = `Currency 1: ${country1} \n Currency 2: ${country2}`;
      //console.log(country1);
      //console.log("here", country1.currencies[0].name);
      fetchExchangeRates(country1, country2);
      //localStorage.setItem("RestCountries", country1);
      sessionStorage.setItem("Exchange", country2);
      console.log(sessionStorage.getItem("Exchange"));
      //console.log(country1.currencies);
      //console.log(country2.currencies);
    } else {
      document.getElementById("currencyInfo").textContent =
        "Invalid countries selected";
    }
    const localstorageData = localStorage.getItem("Country1 Data");
    let country1Data;
    if (localstorageData === null) {
      country1Data = [];
    } else {
      country1Data = JSON.parse(localstorageData);
    }
    country1Data.push(country1);
    localStorage.setItem("Country1 Data", JSON.stringify(country1Data));

    const sessionStorageData = sessionStorage.getItem("Country2 Data");
    let country2Data;
    if (sessionStorageData === null) {
      country2Data = [];
    } else {
      country2Data = JSON.parse(sessionStorageData);
    }
    country2Data.push(country2);
    sessionStorage.setItem("Country2 Data", JSON.stringify(country2Data));
  });
const localstorageData = localStorage.getItem("Country1 Data");
let country1Data;
if (localstorageData === null) {
  country1Data = [];
} else {
  country1Data = JSON.parse(localstorageData);
}
country1Data.push(compareButton);

localStorage.setItem("Compare", JSON.stringify(country1Data));
loadCountryAPI();
