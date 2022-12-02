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

		let docSinNorm = doc(db, "productos", iditem);

		getDoc(docSinNorm).then((item) => {
			setProducto({ id: item.id, ...item.data() });
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
