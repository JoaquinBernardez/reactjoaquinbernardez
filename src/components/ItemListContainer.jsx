import * as React from "react";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import ItemList from "./ItemList";
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";

export default function ItemListContainer() {
	const { idcategoria } = useParams();
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const db = getFirestore();
		let productos;
		if (idcategoria) {
			productos = query(
				collection(db, "Productos"),
				where("categoria", "==", idcategoria)
			);
		} else {
			productos = collection(db, "Productos");
		}

		getDocs(productos).then((res) => {
			const arrayNorm = res.docs.map((element) => {
				return {
					id: element.id,
					nombre: element.data().nombre,
					categoria: element.data().categoria,
					precio: element.data().precio,
					stock: element.data().stock,
					imgUrl: element.data().imgUrl,
				};
			});

			setProductos(arrayNorm);
		});
	}, [idcategoria]);
	return (
		<Container
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Box
				padding="3rem"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "0",
				}}>
				<ItemList productos={productos} />
			</Box>
		</Container>
	);
}
