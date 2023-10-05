async function fetchExchangeRate(currencyCode) {
      const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Nie udało się...${response.statusText}`);
      }
  
      const data = await response.json();
      return data.rates[0].mid;
    }
  


export default fetchExchangeRate;
