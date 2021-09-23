import React, { useState, useEffect } from "react";

const Counter = () => {
	console.log("Counter component started");

	const [count, setCount] = useState(0);

	const counter = () => {
		setCount(prevState => {
			return prevState + 1
		});
	};

	setInterval(counter, 1000);

	console.log('Counter comoponent finished');

	console.log("Counter component render()");
	return <h1> {count}</h1>;
}

export default Counter;