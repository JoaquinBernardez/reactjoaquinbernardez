import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Servicios from "./components/Servicios";
import ContextContainer from "./components/ContextContainer";

function App() {
	return (
		<div>
			<ContextContainer>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/servicios" element={<Servicios />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route
							path="/categoria/:idcategoria"
							element={<ItemListContainer />}
						/>
						{<Route path="/item/:iditem" element={<ItemDetailContainer />} />}
					</Routes>
					<Footer />
				</BrowserRouter>
			</ContextContainer>
		</div>
	);
}

export default App;
