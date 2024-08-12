import React from 'react'
import toast from 'react-hot-toast';

const ProductCard = (props) => {
    const addtocart = async () => {
        try{
            const response = await fetch('http://localhost:3000/carts',
                {
                    method: "POST",
                    headers: {
                        "content-type" : "application/json",
                    },
                    body: JSON.stringify(props.data),
                }
            );
            const data = await response.json();
            if(data){
                toast.success("Add to cart successfully")
            }}
            catch(error)
            {
                toast.error("Failed to add to cart")
            }
    }
  return (
    <div className=" shadow w-80 border">
      <div>
        <img className="h-[300px] w-full" src={props.data.thumbnail} />
      </div>

      <div className="p-3 shadow-2xl gap-5 shadow-blue-black">
        <div className="text-items flex flex-col gap-1">
        <div>{props.data.title}</div>
        <div>Price: {props.data.price}</div>
        <div>Category: {props.data.category}</div>
        </div>
        <button
          onClick={addtocart}
          className=" px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-5"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard