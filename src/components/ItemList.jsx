import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
	return (
		<div
			style={{
				border: "3px solid skyblue",
				margin: "10px",
				boxShadow: "0px 5px 20px #666",
			}}>
			{!productos.length && "Cargando"}
			{productos.map((item) => (
				<Item item={item} />
			))}
		</div>
	);
}
