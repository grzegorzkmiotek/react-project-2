async function fetchExchangeRate(currencyCode) {
	const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}`;
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Nie udało się...${response.statusText}`);
		}
		const data = await response.json();
		return data?.rates?.[0]?.mid;
	} catch {
		throw new Error(`Błąd Api`);
	}
}

export default fetchExchangeRate;
