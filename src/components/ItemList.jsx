import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
	return (
		<div
			style={{
				margin: "2rem",
				display: "flex",
				flexWrap: "wrap",
				width: "100%",
				justifyContent: "center",
			}}>
			{!productos.length && "Cargando productos..."}
			{productos.map((item) => (
				<Item item={item} />
			))}
		</div>
	);
}
