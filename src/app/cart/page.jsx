"use client";

import { useContext, useState } from "react";
import CartContext from "../context/cart";
import Link from "next/link";

export default function CartPage() {
  const { cart, setCart, total } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Remove item from cart
  const removeItemFromCart = (carId) => {
    const updatedCart = cart.filter((item) => item.carId !== carId);
    setCart(updatedCart);
  };

  const handlePlaceOrder = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip ||
      !formData.cardNumber ||
      !formData.expDate ||
      !formData.cvv
    ) {
      alert("Please fill in all the fields!");
      return;
    }

    // Place Order
    setCart([]);
    setIsFormSubmitted(true);
    window.location.href = "/thanks";
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="w-full max-w-7xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 flex space-x-8">
          {/* Cart Items Section (Left Side) */}
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-orange-500 dark:text-white mb-4">
              Your Cart
            </h2>
            {cart.length === 0 ? (
              <div className="text-center text-xl text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.carId}
                    className="flex justify-between items-center border-b pb-4 mb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={70}
                        className="object-contain rounded-md"
                      />
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">{item.type}</p>
                        <p className="text-sm text-orange-500">{item.price}/day</p>
                      </div>
                    </div>
                    <button
                      className="text-red-500 text-sm font-semibold hover:text-red-700 transition duration-200"
                      onClick={() => removeItemFromCart(item.carId)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Total Price */}
                <div className="mt-6 flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold text-gray-800">
                    Total:
                  </span>
                  <span className="text-lg font-semibold text-orange-500">
                    {total}/day
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Form Section (Right Side) */}
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-orange-500 dark:text-white mb-4">
              Checkout
            </h2>

            {/* Shipping Address */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                Shipping Address
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="city"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                Payment Information
              </h3>

              <div className="mt-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="expDate"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expDate"
                    name="expDate"
                    value={formData.expDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <div className="mt-8 text-center">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-lg mt-4"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link
          href="/"
          className="text-orange-500 hover:text-orange-600 text-lg flex items-center justify-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 5l-7 7 7 7" />
          </svg>
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
}
