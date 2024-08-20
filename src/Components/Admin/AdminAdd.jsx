import React, { useState } from "react";
import toast from "react-hot-toast";

import axios from "axios";

const AdminAdd = () => {
  const logouthandler = () => {
    localStorage.removeItem("token");
    location.href = "/login";
  };

  const [productdata, setProductdata] = useState({
    productname: "",
    category: "",
    productprice: "",
    productimage: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (
      productdata.productname === "" ||
      productdata.category === "" ||
      productdata.productprice === "" ||
      productdata.productimage === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    } else {

      const data = await axios.post("http://localhost:3000/products", {
        title: productdata.productname,
        category: productdata.category,
        price: productdata.productprice,
        thumbnail: productdata.productimage,
      })

      console.log(data, "data")

      if(data){
        toast.success("Product added successfully");
      }
    }
  };

  if (localStorage.getItem("token")) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
    <button 
      onClick={logouthandler} 
      className="text-blue-600 hover:underline mb-4"
    >
      Logout
    </button>

    <h1 className="text-3xl font-bold mb-6 text-center">Admin Page</h1>

    <h2 className="text-xl font-semibold mb-4 text-center">Add Product</h2>

    <form onSubmit={handlesubmit} className="space-y-4">
      <div>
        <input
          onChange={(e) => {
            setProductdata({ ...productdata, productname: e.target.value });
          }}
          value={productdata.productname}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product name"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setProductdata({
              ...productdata,
              category: e.target.value,
            });
          }}
          value={productdata.category}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product category"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setProductdata({
              ...productdata,
              productprice: e.target.value,
            });
          }}
          value={productdata.productprice}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Enter product price"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setProductdata({
              ...productdata,
              productimage: e.target.value,
            });
          }}
          value={productdata.productimage}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter image URL"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

    );
  } else {
    location.href = "/login";
  }
};

export default AdminAdd;