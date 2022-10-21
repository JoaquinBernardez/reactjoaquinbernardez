import "./App.css";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<ItemListContainer greeting={"Bienvenido a JCompany !"} />
			<Footer />
		</div>
	);
}

export default App;
