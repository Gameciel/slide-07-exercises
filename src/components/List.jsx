import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function List(props) {
	const location = useLocation();
	const propsData = location.state;
	const [loaded, setLoaded] = useState(false);
	const [datas, setDatas] = useState([]);

	const toArr = [];
	useEffect(() => {
		for (let key in propsData) {
			toArr.push(propsData[key].toString());
		}
		setDatas([...toArr]);
		setLoaded(true);
	}, []);

	return getPar(datas);
}

function getPar(props) {
	return (
		<>
			<div className="container">
				<h1>Your Input:</h1>
				{props.map((val, index) => (
					<>
						<b>{index + 1}:</b>
						<li className="list-group-item mb-2">{val}</li>
					</>
				))}
				<Link to="/slide-07-exercises/">Click here to return</Link>
			</div>
		</>
	);
}
