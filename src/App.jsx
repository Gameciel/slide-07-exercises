import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
