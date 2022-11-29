import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

export default function ItemCounter({ stock, initial }) {
	const [count, setCount] = useState(initial);

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
		</Container>
	);
}
