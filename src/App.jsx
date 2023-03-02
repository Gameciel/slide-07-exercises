import Main from "./components/Main";
import List from "./components/List";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/list" element={<List />} />
					<Route path="" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
