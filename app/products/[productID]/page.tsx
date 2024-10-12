"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Product = {
	id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	stock: number;
	images: string;
};
const ProductIdComponent = () => {
	const params = useParams();
	const productID = params.productID;

	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!productID) return;
		const fetchProduct = async () => {
			const response = await axios.get(
				`https://dummyjson.com/products/${productID}`
			);
			setProduct(response.data);
			setLoading(false);
		};
		fetchProduct();
	}, [productID]);

	if (loading)
		return (
			<p className="text-center text-lg text-gray-500">Products loading...</p>
		);
	if (!product)
		return (
			<p className="text-center text-lg text-gray-500">Product not found</p>
		);
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-5xl mx-auto bg-black text-white shadow-lg rounded-lg overflow-hidden">
				<div className="flex flex-col md:flex-row">
					<img
						className="w-full md:w-1/2 h-96 object-cover"
						src={product.images}
						alt={product.title}
					/>
					<div className="p-6 md:w-1/2 flex flex-col justify-between bg-gray-900">
						<div>
							<h1 className="text-3xl font-bold mb-4 text-pink-500">
								{product.title}
							</h1>
							<p className="text-xl font-semibold text-pink-400 mb-4">
								Price: ${product.price}
							</p>
							<p className="text-gray-400 mb-4">{product.description}</p>
						</div>
						<div>
							<p className="text-sm text-pink-300 mb-4">
								Rating: {product.rating} / 5
							</p>
							<p className="text-sm text-pink-300">
								Stock:{" "}
								{product.stock > 0
									? `${product.stock} available`
									: "Out of stock"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductIdComponent;
