import React from "react";

const CartCard = (props) => {
  const addtocart = async () => {

    const response = await fetch(
      `http://localhost:3000/carts/${props.data.id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    if(data){
      props.fetchCartdata();
    }
  };
  return (
    <div className=" shadow w-80 border">
      <div>
        <img className="h-[300px] w-full" src={props.data.thumbnail} />
      </div>

      <div className="p-3 shadow-2xl flex flex-col gap-3 shadow-blue-black">
        <div> {props.data.title} </div>
        <div>${props.data.price}</div>
        <div>category: {props.data.category}</div>

      <div>
      <button
          onClick={addtocart}
          className=" px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Remove
        </button>
      </div>
      </div>
    </div>
  );
};

export default CartCard;