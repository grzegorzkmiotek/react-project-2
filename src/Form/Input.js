import "../App.css";

function Input({ handleInput }) {
	return (
		<input
			onChange={(event) => handleInput(event.target.value)}
			type='number'
			id='amount'
			placeholder='Kwota'
			required
			min='0.01'
			step='0.01'
			className='input'></input>
	);
}

export default Input;