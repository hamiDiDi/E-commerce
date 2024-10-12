"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type FormData = {
	name: string;
	email: string;
	address: string;
	paymentDetails: string;
};
const Chechout = () => {
	const { clearCart, cartItems } = useCart();
	const [isProcessing, setIsProcessing] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		setIsProcessing(true);
		setTimeout(() => {
			console.log("Payment successfull", data);
			setIsSubmitted(true);
			setIsProcessing(false);
			clearCart();
		}, 2000);
	};
	if (isSubmitted) {
		return (
			<div>
				<h2>Order Confirmed!</h2>
				<p>
					Thank you for your purchase,{" "}
					{cartItems.length ? cartItems[0].title : ""}!
				</p>
				<p>Your order will be processed shortly.</p>
			</div>
		);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Name:</label>
				<input
					type="text"
					{...register("name", { required: "name is required" })}
					placeholder="Enter your name"
				/>
				{errors.name && <p>{errors.name.message}</p>}
			</div>

			<div>
				<label>Email:</label>
				<input
					type="text"
					{...register("email", {
						required: "email is required",
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: "Enter a valid email address",
						},
					})}
					placeholder="Enter your email"
				/>
				{errors.email && <p>{errors.email.message}</p>}
			</div>
			<div>
				<label>Address:</label>
				<input
					type="text"
					{...register("address", { required: "address is required" })}
					placeholder="Enter your address"
				/>
				{errors.address && <p>{errors.address.message}</p>}
			</div>
			<div>
				<label>Payment Details:</label>
				<input
					type="text"
					{...register("paymentDetails", {
						required: "Payment details are required",
					})}
					placeholder="Enter payment details"
				/>
				{errors.paymentDetails && <p>{errors.paymentDetails.message}</p>}
			</div>
			<button type="submit" disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Submit Order"}
      </button>
		</form>
	);
};
export default Chechout;
