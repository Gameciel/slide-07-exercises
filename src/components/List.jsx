import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function List(props) {
	const location = useLocation();
	const propsData = location.state;
	const toArr = [];

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		for (let key in propsData) {
			toArr.push(propsData[key]);
		}

		alert(`Datamu: \n${toArr}`);

		setLoaded(true);
	}, []);

	return (
		<>
			<h1>Not yet</h1>
		</>
	);
}
