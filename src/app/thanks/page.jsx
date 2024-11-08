"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center py-16 px-6">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-orange-500 dark:text-orange-400 mb-6">
          Thank You for Your Order!
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-8">
          Your order has been successfully placed. We are processing it now and will notify you once it's on its way!
        </p>

        {/* Optional: Order summary */}
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <strong>Order Confirmation Number:</strong> #123456789
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            <strong>Total:</strong> $199.99
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-orange-500 dark:text-orange-400 text-lg font-semibold flex items-center justify-center space-x-2"
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
            <span>Back to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
