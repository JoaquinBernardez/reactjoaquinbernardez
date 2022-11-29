import React from "react";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import { misProductos } from "./productos.js";

export default function Item({ item }) {
	return (
		<div style={{ background: "#fafafa", margin: "1rem" }} key={item.id}>
			<p>{item.nombre}</p>

			<Link to={"/item/" + item.id}>Ir al producto</Link>
			<ItemCounter stock={item.stock} initial={1} />
		</div>
	);
}
