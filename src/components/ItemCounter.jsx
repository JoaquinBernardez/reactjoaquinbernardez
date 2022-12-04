import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

export default function ItemCounter({ stock, initial, agregarAlCarrito }) {
	const [count, setCount] = useState(initial);
	const chequeoStock = stock > 0;
	const onMenos = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const onAdd = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	return (
		<Container sx={{ display: "flex" }}>
			<Button onClick={onMenos}>-</Button>
			<Typography>{count}</Typography>
			<Button onClick={onAdd}>+</Button>
			{chequeoStock ? (
				<Button onClick={() => agregarAlCarrito(count)}>AGREGAR</Button>
			) : (
				<Button disabled>AGREGAR</Button>
			)}
		</Container>
	);
}
