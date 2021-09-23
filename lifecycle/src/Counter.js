import React, { useState, useEffect } from "react";

const Counter = () => {
	console.log("Counter component started");

	const [count, setCount] = useState(0);

	const counter = () => {
		setCount(prevState => {
			return prevState + 1
		});
	};

	useEffect(() => {
		console.log('component mounted');
		const intervalId = setInterval(counter, 1000);
		return () => {
			// this function will be called when the component is unmounted
			clearTimeout(intervalId);
		}
	}, [])


	console.log('Counter comoponent finished');

	console.log("Counter component render()");
	return <h1> {count}</h1>;
}

export default Counter;