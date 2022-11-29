import React from "react";
import ItemCounter from "./ItemCounter";

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
					<ItemCounter stock={producto.stock} initial={1} />
				</>
			) : (
				<p>Cargando tu producto...</p>
			)}
		</div>
	);
}
