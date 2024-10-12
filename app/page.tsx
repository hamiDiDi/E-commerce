import { CartProvider } from "./context/CartContext";
import axios from "axios";
import Products from "./products/page";
const Home = async () => {
	const response = await axios.get("https://dummyjson.com/products");
	const data = response.data.products;
	console.log(data);
	return (
		<>
			<CartProvider>
				<div className="bg-black min-h-screen text-white p-8">
					<h1 className="text-4xl font-bold mb-8 text-pink-500 text-center">
						Products list
					</h1>
					<Products products={data}></Products>
				</div>
			</CartProvider>
		</>
	);
};
export default Home;
