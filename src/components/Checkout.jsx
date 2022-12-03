import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { contextoGeneral } from "./ContextContainer";
import ItemCarrito from "./ItemCarrito";

export default function Checkout() {
	const { carrito, totalAPagar } = useContext(contextoGeneral);
	const [nombresProductos, setNombresProductos] = useState([]);
	const [nombre, setNombre] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");

	function cambioDeNombre() {
		let nombres = carrito.map((item) => item.nombre);
		setNombresProductos(nombres);
	}
	useEffect(() => {
		cambioDeNombre();
	}, [carrito]);
	function botonComprar() {
		cambioDeNombre();
		alert(
			nombre +
				" " +
				tel +
				" " +
				email +
				" quiere comprar " +
				nombresProductos +
				" total a pagar $" +
				totalAPagar
		);
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<div style={{ display: "flex" }}>
				<ItemCarrito />
			</div>
			<div>Total a pagar: ${totalAPagar} </div>
			<div>
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
				<Button onClick={botonComprar} value="Buy" variant="contained">
					Buy
				</Button>
			</div>
		</div>
	);
}
