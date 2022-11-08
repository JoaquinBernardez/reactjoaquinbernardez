import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/categoria/:idcategoria"
						element={<ItemListContainer />}
					/>
					{<Route path="/item/:iditem" element={<ItemDetailContainer />} />}
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
