import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AdminProductRow from './AdminProductRow';

const Admin = () => {
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            setProductData(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchProducts();
        } else {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <div className='flex gap-5 justify-between items-center pb-5 mt-24 pt-10'>
            <div className='bg-red-500 text-white px-5 p-3 rounded-md'>
            <NavLink to='/admin/add'>Add Products</NavLink>
            </div>
            <div className='bg-red-500 text-white px-5 p-3 rounded-md'>
            <button onClick={handleLogout}>Logout</button>
            </div>
            </div>
            <table>
                <tbody className=''>
                    {productData.map((product, index) => {
                        return  <AdminProductRow
                        key={product.id} 
                        fetchProducts={fetchProducts}
                        index={index}
                        product={product}
                    />
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
