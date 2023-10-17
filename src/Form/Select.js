function Select() {
	return (
		<select
		name="currency"
			className='container'>
			<option value='EUR'>Euro</option>
			<option value='USD'>Dolar amerykański</option>
			<option value='CHF'>Frank szwajcarski</option>
		</select>
	);
}

export default Select;
