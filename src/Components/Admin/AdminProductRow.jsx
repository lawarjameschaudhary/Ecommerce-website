import React from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const AdminProductRow = ({ product, index, fetchproducts }) => {
    const deletehandler = async() => {
        const response = await fetch(`http://localhost:3000/products/${product.id}`, {
            method : "DELETE",
        })

        const data = await response.json();
        if(data){
            toast.success("Product deleted successfully");
        }

    }


  return (
  
    <div className=" border-2 border-gray-300 p-8 mt-10">
      <div > 
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full"
        />
      </div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.price}</div>
     <div>
     
       <div className="flex gap-5 mt-6">
       <div className="bg-blue-500 text-white px-8 py-3 rounded-md items-center">
        <NavLink to={`/admin/edit/${product.id}/`} >Edit</NavLink>
        </div>
       <div className="bg-red-500 text-white rounded-md px-6 py-3 items-center ">
       <button onClick={deletehandler}>delete</button>
       </div>
       </div>
      
     </div>
     </div>
  );
};

export default AdminProductRow;