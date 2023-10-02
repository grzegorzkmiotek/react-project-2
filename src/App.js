import "./App.css";
import Button from "./Form/Button";
import Input from "./Form/Input";
import Result from "./Form/Result";
import Select from "./Form/Select";
import ServicesApi from "./Services/ServicesApi";

function App() {
	const [selectedValue, setSelectedValue] = useState("EUR");
	const [inputValue, setInputValue] = useState(0);

	const handleSelect = (value) => {
		setSelectedValue(value);
	};

	const handleInput = (value) => {
		setInputValue(value);
	};

	// async function fetchExchangeRate() {
	// 	const url = `http://api.nbp.pl/api/exchangerates/rates/a/${selectedValue}`;
	// 	const response = await fetch(url);

	// 	if (!response.ok) {
	// 		throw new Error(`Nie udało się...${response.statusText}`);
	// 	}

	// 	const data = await response.json();
	// 	return data.rates[0].mid;
	// }

	function convertCurrency(event) {
		event.preventDefault();

		// const code = document.querySelector("#from-currency").value;
		// const amount = document.querySelector("#amount").value;

		fetchExchangeRate()
			.then((rate) => {
				console.log(rate);
				const result = rate * inputValue;
				console.log(result.toFixed(2));
				// document.querySelector("#result").innerText = result.toFixed(2);
			})
			.catch((error) => {
				console.error(`Wystąpił błąd! ${error}`);
			});
	}
	// document
	// 	.querySelector("#income-form")
	// 	.addEventListener("submit", convertCurrency);
	return (
		<>
			<div className='App'>
				<div className='Top'>
					<img className='Image' src='future collars.png' alt='Logo'></img>
					<h1>Przelicznik walut</h1>
				</div>
				<header className='Header'>
					<form id='income-form' className='size' onSubmit={convertCurrency}>
						<Input handleInput={handleInput} />
						<Select handleSelect={handleSelect} />
						<Button />
					</form>
					<Result />
				</header>
			</div>
			<hr width='400'></hr>
		</>
	);
}

export default App;
