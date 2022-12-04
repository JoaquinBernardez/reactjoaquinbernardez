import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { Box } from "@mui/material";

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
		<Box
			sx={{
				margin: "10px",
				height: "75vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<ItemDetail producto={producto} />
		</Box>
	);
}
