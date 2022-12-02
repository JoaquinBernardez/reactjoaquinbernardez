import React, { useContext } from "react";
import { useState } from "react";
import { contextoGeneral } from "./ContextContainer";

export default function Checkout() {
	const { carrito, totalAPagar } = useContext(contextoGeneral);
	const [nombre, setNombre] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");
	function botonComprar() {
		alert(
			nombre +
				" " +
				tel +
				" " +
				email +
				" quiere comprar " +
				JSON.stringify(carrito) +
				"total a pagar" +
				totalAPagar
		);
	}
	return (
		<div>
			<div>
				{carrito.map((item) => (
					<p>{item.nombre + "" + item.precio + "" + item.quantity}</p>
				))}
				{JSON.stringify(carrito)}
			</div>
			<div>Total a pagar:{totalAPagar}</div>
			<div>
				<input
					placeholder="nombre"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
				<input
					placeholder="tel"
					value={tel}
					onChange={(e) => setTel(e.target.value)}
				/>
				<input
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input type="button" onClick={botonComprar} value="Buy" />
			</div>
		</div>
	);
}
