import React, { useState, createContext } from "react";
import { useEffect } from "react";

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
	const [carrito, setCarrito] = useState([]);

	return <contextoGeneral.Provider>{children}</contextoGeneral.Provider>;
}
