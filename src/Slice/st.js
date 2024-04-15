import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cles } from "./Creat";
function Cts() {
  const selec = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Initialize dispatch

  const handleRemove = (id) => {
    dispatch(cles(id)); // Dispatch the remove action with the item id
  };

  return (
    <>
      <h2>Cart ({selec.length})</h2>
      {selec.map((item) => (
        <main key={item.id}>
          <img src={item.image} alt={item.title} />
          <span>{item.title}</span>
          <span>{item.price}</span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </main>
      ))}
    </>
  );
}

export default Cts;
