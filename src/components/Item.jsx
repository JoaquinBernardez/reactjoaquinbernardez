import React from "react";
import ItemCounter from "./ItemCounter";
import { Link } from "react-router-dom";
import { contextoGeneral } from "./ContextContainer";
import { useContext } from "react";
import { Box, Typography, CardMedia } from "@mui/material";

export default function Item({ item }) {
	const { addItem } = useContext(contextoGeneral);

	function agregarAlCarrito(cant) {
		addItem(item, cant);
	}
	return (
		<Box
			sx={{
				background: "#f8f8f8",
				margin: "1rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "1rem",
				borderRadius: "10px",
				height: "fit-content",
				maxWidth: "25%",
			}}
			key={item.id}>
			<Typography variant="h5" gutterBottom>
				{item.nombre}
			</Typography>
			<CardMedia component="img" height="194" image={item.imgUrl} />
			<Typography variant="body1" gutterBottom>
				${item.precio}
			</Typography>
			<Link to={"/item/" + item.id}>Ir al item</Link>
			<ItemCounter
				stock={item.stock}
				initial={1}
				agregarAlCarrito={agregarAlCarrito}
			/>
		</Box>
	);
}
