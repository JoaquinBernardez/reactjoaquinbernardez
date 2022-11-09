import React from "react";

export default function ItemDetail({ producto }) {
	return (
		<div
			style={{
				textAlign: "center",
			}}>
			{producto.id ? (
				<>
					Producto: {producto.nombre}
					<br />
					Categoria: {producto.categoria}
					<br />
					Precio: {producto.precio}
					{/* 					<br />
					{producto.imagen} */}
				</>
			) : (
				<p>Cargando tu producto...</p>
			)}
		</div>
	);
}
