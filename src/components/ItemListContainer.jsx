import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { misProductos } from "./productos";
import { Link, useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
	const { idcategoria } = useParams();
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const productosPromise = new Promise((res, rej) => {
			setTimeout(() => {
				res(misProductos);
			}, 2000);
		});
		productosPromise.then((res) => {
			if (idcategoria) {
				setProductos(res.filter((item) => idcategoria === item.categoria));
			} else {
				setProductos(res);
			}
		});
	});

	return (
		<Box
			sx={{
				textAlign: "center",
				boxShadow: "0px 5px 20px #666",
			}}>
			<ItemList productos={productos} />
		</Box>
	);
}
