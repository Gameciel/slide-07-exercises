import Main from "./components/Main";
import List from "./components/List";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
	useEffect(() => {
		let time = new Date();
		let newData = [];

		axios
			.get(`https://api.jsonbin.io/v3/b/640371ffebd26539d0891f86`)
			.then(res => {
				newData = [...res.data.record.visit, time.toString()];
			})
			.finally(() => {
				let req = new XMLHttpRequest();

				req.open(
					"PUT",
					"https://api.jsonbin.io/v3/b/640371ffebd26539d0891f86",
					true
				);
				req.setRequestHeader("Content-Type", "application/json");
				req.setRequestHeader(
					"X-Master-Key",
					"$2b$10$1OumGkPA7lQAOO.GfhNfvOmPvxfWvrVA2ZSD2NsZ7ZEzFkjwbpC3O"
				);
				req.send(`{"visit": ${JSON.stringify(newData)}}`);
			});
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/list" element={<List />} />
					<Route path="/slide-07-exercises/" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
