import React from "react";
import "../App.css";

function Select() {
	return (
		<select id='from-currency'>
			<option value='EUR'>Euro</option>
			<option value='USD'>Dolar amerykański</option>
			<option value='CHF'>Frank szwajcarski</option>
		</select>
	);
}

export default Select;
