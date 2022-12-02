import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

export default function Cart({ cant }) {
	return (
		<Container sx={{ display: "flex", alignItems: "center" }}>
			<ShoppingCartIcon fontSize="large" sx={{ cursor: "pointer" }} />
			<Box>{cant}</Box>
		</Container>
	);
}
