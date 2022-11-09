import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { misProductos } from "./productos";

export default function ItemDetailContainer() {
	const { iditem } = useParams();

	const [producto, setProducto] = useState({});

	useEffect(() => {
		const productoPromise = new Promise((res, rej) => {
			setTimeout(() => {
				res(misProductos.find((item) => item.id == iditem));
			}, 2000);
		});

		productoPromise.then((res) => {
			setProducto(res);
		});
	}, [iditem]);

	return (
		<div
			style={{
				border: "2px solid black",
				margin: "1rem auto",
				padding: "1rem",
			}}>
			<ItemDetail producto={producto} />
		</div>
	);
}
