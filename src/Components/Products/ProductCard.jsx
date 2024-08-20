import React from 'react';
import toast from 'react-hot-toast';

const ProductCard = (props) => {
    const addtocart = async () => {
        try {
            const response = await fetch('http://localhost:3000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(props.data),
            });
            const data = await response.json();
            if (data) {
                toast.success("Added to cart successfully");
            }
        } catch (error) {
            toast.error("Failed to add to cart");
        }
    };

    return (
        <div className="w-80 border border-gray-200 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-blue-300 hover:shadow-xl hover:scale-105">
            <div>
                <img
                    className="h-[300px] w-full object-cover rounded-t-lg"
                    src={props.data.thumbnail}
                    alt={props.data.title}
                />
            </div>
            <div className="p-4 bg-white">
                <div className="text-items flex flex-col gap-2">
                    <div className="font-semibold text-lg">{props.data.title}</div>
                    <div className="text-gray-700">Price: ${props.data.price}</div>
                    <div className="text-gray-500">Category: {props.data.category}</div>
                </div>
                <button
                    onClick={addtocart}
                    className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-700"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
