import "./App.css";
import Button from "./Form/Button";
import Input from "./Form/Input";
import Result from "./Form/Result";

function App() {
	return (
		<>
			<div className='App'>
				<div className='Top'>
					<img className='Image' src='future collars.png' alt='Logo'></img>
					<h1>Przelicznik walut</h1>
				</div>
				<header className='Header'>
					<form id='income-form' class='size'>
						<Input></Input>
						<Select></Select>
						<Button></Button>
						<Result></Result>
						<p>PLN</p>
					</form>
				</header>
			</div>
			<hr width='400'></hr>
		</>
	);
}

export default App;
