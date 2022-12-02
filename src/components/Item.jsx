import React from "react";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import { contextoGeneral } from "./ContextContainer";
import { useContext } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
export default function Item({ item }) {
	const { addItem } = useContext(contextoGeneral);

	function agregarAlCarrito(cant) {
		addItem(item, cant);
	}
	return (
		<div
			style={{
				background: "#fafafa",
				margin: "1rem",
				textAlign: "center",
			}}
			key={item.id}>
			<p>{item.nombre}</p>

			<Link to={"/item/" + item.id}>Ir al producto</Link>
			<ItemCounter
				stock={item.stock}
				initial={1}
				agregarAlCarrito={agregarAlCarrito}
			/>
		</div>
	);
}
