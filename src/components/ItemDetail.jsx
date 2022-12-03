import React, { useContext } from "react";
import ItemCounter from "./ItemCounter";
import { contextoGeneral } from "./ContextContainer";

export default function ItemDetail({ producto }) {
	const { addItem } = useContext(contextoGeneral);
	function agregarAlCarrito(cant) {
		addItem(producto, cant);
	}

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
					<br />
					<img
						style={{ width: "200px", margin: "1rem auto" }}
						src={producto.imgUrl}
						alt=""
					/>
					<ItemCounter
						stock={producto.stock}
						initial={1}
						agregarAlCarrito={agregarAlCarrito}
					/>
				</>
			) : (
				<p>Cargando tu producto...</p>
			)}
		</div>
	);
}
