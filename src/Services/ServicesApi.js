import React from 'react'

function ServicesApi() {
  return (
    async function fetchExchangeRate() {
      const url = `http://api.nbp.pl/api/exchangerates/rates/a/${selectedValue}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Nie udało się...${response.statusText}`);
      }
  
      const data = await response.json();
      return data.rates[0].mid;
    }
  )
}

export default ServicesApi;
