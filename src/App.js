import { useState } from "react";
import "./App.css";
import Button from "./Form/Button";
import Input from "./Form/Input";
import Result from "./Form/Result";
import Select from "./Form/Select";
import fetchExchangeRate from "./Services/ServicesApi";

function App() {
	const [selectedValue, setSelectedValue] = useState("EUR");
	const [inputValue, setInputValue] = useState(0);
	const [convertingResult, setConvertingResult] = useState("");

	const handleSelect = (value) => {
		setSelectedValue(value);
	};

	const handleInput = (value) => {
		setInputValue(Number(value));
	};

	function convertCurrency(event) {
		event.preventDefault();

		fetchExchangeRate(selectedValue)
			.then((rate) => {
				console.log(rate, inputValue);
				const result = rate * inputValue;
				setConvertingResult(result.toFixed(2));
			})
			.catch((error) => {
				console.error(`Wystąpił błąd! ${error}`);
			});
	}

	return (
		<>
			<div className='App'>
				<div className='Top'>
					<img className='Image' src='future collars.png' alt='Logo'></img>
					<h1 className='H1'>Przelicznik walut</h1>
				</div>
				<header className='Header'>
					<form id='income-form' className='size' onSubmit={convertCurrency}>
						<Input handleInput={handleInput} />
						<Select handleSelect={handleSelect} />
						<Button />
						<Result result={convertingResult} />
					</form>
				</header>
			</div>
			<hr width='400'></hr>
		</>
	);
}

export default App;
