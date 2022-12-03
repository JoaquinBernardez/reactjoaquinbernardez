import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { misProductos } from "./productos";

export default function ItemDetailContainer() {
	const { iditem } = useParams();

	const [producto, setProducto] = useState({});

	useEffect(() => {
		const db = getFirestore();

		let docSinNorm = doc(db, "Productos", iditem);

		getDoc(docSinNorm).then((item) => {
			setProducto({ id: item.id, ...item.data() });
		});
	}, [iditem]);

	return (
		<div
			style={{
				border: "2px solid black",
				margin: "5rem auto",
				alignItems: "center",
				padding: "1rem",
				width: "300px",
				height: "280px",
			}}>
			<ItemDetail producto={producto} />
		</div>
	);
}
