import "../App.css";

function Input({ handleInput }) {
	return <input onChange={(event) => handleInput(event.target.value)} type='number' id='amount' placeholder='  Kwota'></input>;
}

export default Input;

// import {useState, useEffect} from "react";

// const URL ='';

// const Currency = () => {
// return (

// )

// }