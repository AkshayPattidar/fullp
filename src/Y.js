import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Y() {
  let v = useNavigate();

  let yu = function () {
    localStorage.removeItem("Y", true);
    v("/");
  };
    useEffect(() => {
    let st = localStorage.getItem("Y");
    console.log(st);

    if (st) {
      v("/");
    }
  });

  return (
    <div>
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button onClick={yu}>LOGIN</button>
    </div>
  );
}
export default Y;
