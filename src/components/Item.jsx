import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
	return (
		<div style={{ background: "#fafafa", margin: "1rem" }} key={item.id}>
			<p>{item.nombre}</p>

			<Link to={"/item/" + item.id}>Ir al item</Link>
		</div>
	);
}
