import "./App.css";

function App() {
	return (
		<div className='App'>
			<img className='Image' src='future collars.png' alt='Logo'></img>
			<h1>Przelicznik walut</h1>
			<header className='App-header'>
				<form id='income-form' class='size'>
					<input type='number' id='amount' placeholder='  Kwota'></input>
					<select id='from-currency'>
						<option value='EUR'>Euro</option>
						<option value='USD'>Dolar amerykański</option>
						<option value='CHF'>Frank szwajcarski</option>
					</select>

					<button id='get-currencies'>Przelicz</button>
					<p>To</p>
					<p id='result' class='box'></p>
					<p>PLN</p>
				</form>
			</header>
			<hr width='400'></hr>
		</div>
	);
}

export default App;
