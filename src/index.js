import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// async function fetchExchangeRate(currencyCode) {
// 	const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}`;
// 	const response = await fetch(url);

// 	if (!response.ok) {
// 		throw new Error(`Nie udało się...${response.statusText}`);
// 	}

// 	const data = await response.json();
// 	return data.rates[0].mid;
// }

// function convertCurrency(event) {
// 	event.preventDefault();
// 	const code = document.querySelector("#from-currency").value;
// 	const amount = document.querySelector("#amount").value;

// 	fetchExchangeRate(code)
// 		.then((rate) => {
// 			const result = rate * amount;
// 			document.querySelector("#result").innerText = result.toFixed(2);
// 		})
// 		.catch((error) => {
// 			console.error(`Wystąpił błąd! ${error}`);
// 		});
// }
// document
// 	.querySelector("#income-form")
// 	.addEventListener("submit", convertCurrency);
