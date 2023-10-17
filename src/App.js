import { useState } from "react";
import "./App.css";
import Button from "./Form/Button";
import Input from "./Form/Input";
import Result from "./Form/Result";
import Select from "./Form/Select";
import fetchExchangeRate from "./Services/fetchExchangeRate";

function App() {
	const [convertingResult, setConvertingResult] = useState("");
	const [error, setError] = useState("");

	function convertCurrency(event) {
		event.preventDefault();
		const selectedValue = event.target.currency.value;
		const inputValue = event.target.amount.value;
		setError("");

		fetchExchangeRate(selectedValue)
			.then((rate) => {
				if (rate) {
					const result = (rate * inputValue).toFixed(2);
					setConvertingResult(result)
				} else {
					setError("Wystąpił błąd!");
				}
			})
			.catch(() => {
				setError("Wystąpił błąd!");
			});
	}

	return (
		<>
			<div className='App'>
				<div className='top'>
					<img className='image' src='future collars.png' alt='Logo'></img>
					<h1 className='h1'>Przelicznik walut</h1>
				</div>
				<header className='header'>
					<form className='size' onSubmit={convertCurrency}>
						<Input className='input'/>
						<Select/>
						<Button />
						<Result result={convertingResult} />
					</form>
				</header>
			</div>
			{error ? <p>{error}</p> : null}
			<hr className='divider'></hr>
		</>
	);
}

export default App;
