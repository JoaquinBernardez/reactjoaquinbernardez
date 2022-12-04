import React, { useContext } from "react";
import ItemCounter from "./ItemCounter";
import { contextoGeneral } from "./ContextContainer";
import { Box, Typography, CardMedia } from "@mui/material";

export default function ItemDetail({ producto }) {
	const { addItem } = useContext(contextoGeneral);
	function agregarAlCarrito(cant) {
		addItem(producto, cant);
	}

	return (
		<Box
			sx={{
				background: "#f8f8f8",
				margin: "1rem",
				width: "300px",
				padding: "1rem",
				borderRadius: "10px",
				boxShadow: "5px 5px 5px #afafaf",
				height: "fit-content",
			}}>
			{producto.id ? (
				<Box>
					<Typography variant="h5" gutterBottom>
						{producto.nombre}
					</Typography>
					<CardMedia component="img" height="194" image={producto.imgUrl} />
					<Typography variant="body1" gutterBottom>
						${producto.precio}
					</Typography>
					<Typography>Stock: {producto.stock}</Typography>
					<ItemCounter
						stock={producto.stock}
						initial={1}
						agregarAlCarrito={agregarAlCarrito}
					/>
				</Box>
			) : (
				<Typography>Cargando tu producto...</Typography>
			)}
		</Box>
	);
}
