"use client";
import { CartProvider, useCart } from "../context/CartContext";

const Cart = () => {
	const { cartItems, removeFromCart, clearCart } = useCart();

	return (
		<CartProvider>
		<div>
			<h1>Shopping Cart</h1>
			{cartItems.map((item) => (
				<div key={item.id}>
					<p>
						{item.title} - {item.price} * {item.quantity}
					</p>
					<button onClick={() => removeFromCart(item.id)}>Remove</button>
					<button onClick={clearCart}>Clear Cart</button>
				</div>
			))}
		</div>
		</CartProvider>
	);
};
export default Cart;
