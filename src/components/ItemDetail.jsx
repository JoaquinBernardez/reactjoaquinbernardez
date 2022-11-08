import React from "react";

export default function ItemDetail({ producto }) {
	return (
		<div style={{ background: "#fafafa", margin: "1rem" }}>
			{producto.id ? <h3>{producto.nombre}</h3> : <p>Cargando</p>}
		</div>
	);
}
