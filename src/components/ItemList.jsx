import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
	return (
		<div
			style={{
				border: "3px solid ",
				margin: "10px",
			}}>
			{!productos.length && "Cargando productos..."}
			{productos.map((item) => (
				<Item item={item} />
			))}
		</div>
	);
}
