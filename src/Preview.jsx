import React, { useState } from "react";
import "./Preview.css";

function Preview({ setCart, cart, data, decrementCartQty, incrementCartQty }) {
  const handleRemove = () => {
    const deleteMessage = cart.filter((msg) => data.id !== msg.id);
    setCart(deleteMessage);
  };

  return (
    <div className="Header">
      <h3 className="Heading">{data?.title}</h3>
      {/* <p className="paragraph">{data?.desc}</p> */}
      <button
        className="btn btn-danger px-3"
        // disabled={disable[0]}
        onClick={() => decrementCartQty(data?.id)}
        type="button"
      >
        -
      </button>
      <p>{data?.quantity}</p>
      <button
        className="btn btn-danger px-3"
        onClick={() => incrementCartQty(data?.id)}
        type="button"
      >
        +
      </button>{" "}
      <img style={{ width: "50px", marginLeft: "20px" }} src={data?.img} />
      <p>{data?.price}</p>
      <button
        style={{ color: "white", backgroundColor: "red" }}
        s
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
}

export default Preview;
