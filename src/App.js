import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Ticket from "./components/Ticket";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CompraDeProductos from "./components/CompraDeProductos";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ContextContainer from "./components/ContextContainer";

function App() {
	return (
		<div>
			<ContextContainer>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/Checkout" element={<Checkout />} />
						<Route path="/productosComprados" element={<CompraDeProductos />} />
						<Route
							path="/categoria/:idcategoria"
							element={<ItemListContainer />}
						/>
						{<Route path="/item/:iditem" element={<ItemDetailContainer />} />}
						<Route path="/pedidos" element={<Ticket />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</ContextContainer>
		</div>
	);
}

export default App;
