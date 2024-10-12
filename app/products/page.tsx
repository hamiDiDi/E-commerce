"use client";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
type Product = {
	id: number;
	title: string;
	price: number;
	images: string;
};
interface ProductsProps {
	products: Product[];
}
const Products = ({ products }: ProductsProps) => {
	const { addToCart } = useCart();
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		setSelectedProducts(products);
		setLoading(false);
	}, [products]);
	if (loading) {
		return (
			<p className="text-center text-lg text-gray-500">Loading products...</p>
		);
	}

	return (
		<>
			<div className="flex flex-wrap gap-6 justify-center">
				{selectedProducts.map((product) => (
					<div
						className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl  w-72"
						key={product.id}
					>
						<div className="text-xl font-semibold mb-2">{product.title}</div>
						<p className="text-lg text-pink-400 mb-4">
							Price: ${product.price}
						</p>
						<img
							className="w-full h-48 object-cover rounded-t-lg mb-4"
							src={product.images}
							alt={product.title}
						/>
						<button
							onClick={() => addToCart(product)}
							className="bg-pink-500 text-black px-4 py-2 rounded-lg hover:bg-pink-600"
						>
							Add to Card
						</button>
					</div>
				))}
			</div>
		</>
	);
};
export default Products;
