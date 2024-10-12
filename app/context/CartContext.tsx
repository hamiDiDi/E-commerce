"use client";
import {
	createContext,
	useContext,
	ReactNode,
	useReducer,
	useEffect,
} from "react";

type Product = {
	id: number;
	title: string;
	price: number;
	quantity?: number;
};

type cartContextType = {
	cartItems: Product[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
};
const CartContext = createContext<cartContextType | null>(null);
// using costum hook for useContext in it so it holds the whole cart context
export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
type Action =
	| { type: "ADD_ITEM"; payload: Product }
	| { type: "REMOVE_ITEM"; payload: number }
	| { type: "CLEAR-CART" };
const cartReducer = (state: Product[], action: Action): Product[] => {
	switch (action.type) {
		case "ADD_ITEM":
			const existingProduct = state.find(
				(item) => item.id === action.payload.id
			);
			if (existingProduct) {
				return state.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: (item.quantity || 1) + 1 }
						: item
				);
			} else {
				return [...state, { ...action.payload, quantity: 1 }];
			}
		case "REMOVE_ITEM":
			state.filter((item) => item.id !== action.payload);

		case "CLEAR-CART":
			return [];

		default:
			return state;
	}
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
		if (typeof window !== "undefined") {
			const storedCart = localStorage.getItem("cart");
			return storedCart ? JSON.parse(storedCart) : [];
		}
	});
	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("cart", JSON.stringify(cartItems));
		}
	}, [cartItems]);

	const addToCart = (product: Product) => {
		dispatch({ type: "ADD_ITEM", payload: product });
	};

	const removeFromCart = (id: number) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	const clearCart = () => dispatch({ type: "CLEAR-CART" });

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
