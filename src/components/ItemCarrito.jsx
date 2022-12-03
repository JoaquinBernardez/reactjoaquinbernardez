import React from "react";
import { contextoGeneral } from "./ContextContainer";
import { useContext } from "react";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";

export default function ItemCarrito() {
	const { carrito } = useContext(contextoGeneral);
	useEffect(() => {}, [carrito]);

	return (
		<div
			style={{
				display: "flex",
			}}>
			{carrito.map((producto) => (
				<div
					style={{
						display: "flex",
						background: "rgba(0, 0, 0, 0.06)",
						margin: "1rem",
						padding: "1rem",
					}}>
					Producto: {producto.nombre}
					<br />
					Categoria: {producto.categoria}
					<br />
					Precio por unidad: ${producto.precio}
					<br />
					Cantidad: {producto.quantity}
					<br />
					Precio total: ${producto.precio * producto.quantity}
				</div>
			))}
		</div>
	);
}
