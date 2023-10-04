let countryData;
function loadCountryAPI() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => {
      countryData = data;
      console.log(countryData);
      populateCountryDropdowns();
    })

    .catch((error) => {
      console.log(error);
    });
}

function populateCountryDropdowns() {
  const countryDropdown1 = document.getElementById("country1");
  const countryDropdown2 = document.getElementById("country2");
  for (const country of countryData) {
    const option1 = document.createElement("option");
    option1.value = country.name.common;

    option1.textContent = country.name.common;
    const option2 = document.createElement("option");
    option2.value = Object.keys(country.currencies || "NA");
    option2.textContent = country.name.common;
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
      document.getElementById(
        "exchangeRate"
      ).textContent = `Exchange Rate: 1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
    })

    .catch((error) => {
      console.log(error);
    });
}
const compareButton = document
  .getElementById("compareButton")
  .addEventListener("click", function () {
    const country1 = document.getElementById("country1").value;
    const country2 = document.getElementById("country2").value;

    if (country1 && country2) {
      const comparisonData = {
        country1: country1,
        country2: country2,
        exchangeRate: (document.getElementById(
          "currencyInfo"
        ).textContent = `Currency 1: ${country1} \n Currency 2: ${country2}`),
      };
      fetchExchangeRates(country1, country2);
      const localstorageData = localStorage.getItem("Country1 Data");
      let country1Data;
      if (localstorageData === null) {
        country1Data = [];
      } else {
        country1Data = JSON.parse(localstorageData);
      }
      country1Data.push(comparisonData);
      console.log(country1Data);
      localStorage.setItem("comparisonData", JSON.stringify(country1Data));
      console.log(localstorageData);
    } else {
      document.getElementById("currencyInfo").textContent =
        "Invalid countries selected";
    }
  });
localStorage.setItem("compareButton", compareButton);

loadCountryAPI();
