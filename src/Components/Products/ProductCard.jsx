import React from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductCard = (props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
        <motion.div
            ref={ref} 
            className="w-40 md:w-80 border border-gray-200 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: inView ? 1 : 0.7, scale: inView ? 1 : 0.7 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
        >
            <div>
                <img
                    className="h-[150px] md:h-[300px] w-full object-cover rounded-t-lg"
                    src={props.data.thumbnail}
                    alt={props.data.title}
                />
            </div>
            <div className="p-1 md:p-4 bg-white">
                <div className="text-items flex flex-col gap-0 md:gap-2">
                    <div className="font-semibold text-sm md:text-lg">{props.data.title}</div>
                    <div className="text-gray-700 text-sm md:text-lg">Price: ${props.data.price}</div>
                    <div className="text-gray-500 text-sm md:text-lg">Category: {props.data.category}</div>
                </div>
                <button
                    onClick={addtocart}
                    className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-md transition-colors duration-700"
                >
                    Add to cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
