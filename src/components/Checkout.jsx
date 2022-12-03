import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { contextoGeneral } from "./ContextContainer";
import ItemCarrito from "./ItemCarrito";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
	addDoc,
	collection,
	getFirestore,
	updateDoc,
	doc,
} from "firebase/firestore";
import { increment } from "firebase/firestore";

export default function Checkout() {
	const { carrito, totalAPagar, clear } = useContext(contextoGeneral);
	const [nombre, setNombre] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	function handleClickComprar() {
		const pedido = {
			comprador: { nombre, tel, email },
			items: carrito,
			total: totalAPagar,
		};

		const database = getFirestore();
		const pedidos = collection(database, "pedidos");
		addDoc(pedidos, pedido).then((miPedido) => {
			console.log(miPedido.id);
			carrito.forEach((item) => {
				const documento = doc(database, "productos", item.id);
				updateDoc(documento, { stock: increment(-item.quantity) });
			});
			clearInfo();
			success();
		});
	}
	function clearInfo() {
		setTel("");
		setEmail("");
		setNombre("");
		clear();
	}
	function success() {
		navigate("/productosComprados");
		setTimeout(() => {
			navigate("/");
		}, 2500);
	}
	return (
		<Container
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Box style={{ display: "flex" }}>
				<ItemCarrito />
			</Box>
			<Typography>Total a pagar: ${totalAPagar} </Typography>
			<Box>
				<TextField
					onChange={(e) => setNombre(e.target.value)}
					id="filled-basic"
					label="nombre"
					variant="filled"
					value={nombre}
				/>
				<TextField
					onChange={(e) => setTel(e.target.value)}
					id="filled-basic"
					label="tel"
					variant="filled"
					value={tel}
				/>

				<TextField
					onChange={(e) => setEmail(e.target.value)}
					id="filled-basic"
					label="email"
					variant="filled"
					value={email}
				/>
				{carrito.length ? (
					<Button onClick={handleClickComprar} value="Buy" variant="contained">
						Comprar
					</Button>
				) : (
					<Button variant="contained" disabled>
						Comprar
					</Button>
				)}
			</Box>
		</Container>
	);
}
