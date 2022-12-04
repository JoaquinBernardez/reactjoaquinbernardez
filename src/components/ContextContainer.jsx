import React, { useState, createContext, useEffect } from "react";

export const contextoGeneral = createContext();
export default function ContextContainer({ children }) {
	const [carrito, setCarrito] = useState(
		JSON.parse(localStorage.getItem("cart")) || []
	);
	const [totalAPagar, setTotalApagar] = useState(0);
	const [pedidos, setPedidos] = useState(
		JSON.parse(localStorage.getItem("pedidos")) || []
	);
	function posInCart(id) {
		const pos = carrito.findIndex((item) => item.id == id);
		return pos;
	}

	function addItem(item, quantity) {
		const pos = posInCart(item.id);
		if (pos == -1) {
			setCarrito([...carrito, { ...item, quantity }]);
		} else {
			const carritoAux = [...carrito];
			carritoAux[pos] = {
				...carritoAux[pos],
				quantity: carritoAux[pos].quantity + quantity,
			};
			setCarrito(carritoAux);
		}
	}
	function removeItem(id) {
		setCarrito(carrito.filter((product) => product.id !== id));
	}
	function clear() {
		setCarrito([]);
	}

	useEffect(() => {
		const tot = carrito.reduce(
			(acc, item) => acc + item.quantity * item.precio,
			0
		);
		setTotalApagar(tot);
	}, [carrito]);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(carrito));
	}, [carrito]);

	return (
		<contextoGeneral.Provider
			value={{
				carrito,
				addItem,
				removeItem,
				clear,
				totalAPagar,
				pedidos,
				setPedidos,
			}}>
			{children}
		</contextoGeneral.Provider>
	);
}
