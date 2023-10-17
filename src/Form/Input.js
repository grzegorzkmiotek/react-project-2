function Input() {
	return (
		<input
			name='amount'
			type='number'
			placeholder='Kwota'
			required
			min='0.01'
			step='0.01'
			className='input'></input>
	);
}

export default Input;