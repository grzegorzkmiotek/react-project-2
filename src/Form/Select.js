import React from "react";
import "../App.css";

function Select({ handleSelect }) {
	return (
		<select
			id='from-currency'
			className='container'
			onChange={(event) => handleSelect(event.target.value)}>
			<option value='EUR'>Euro</option>
			<option value='USD'>Dolar amerykański</option>
			<option value='CHF'>Frank szwajcarski</option>
		</select>
	);
}

export default Select;
