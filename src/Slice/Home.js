import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./Creat";
import { as } from "./list";
import { status } from "./list";

function Home() {
  let patches = useDispatch();
  let soe = useSelector((states) => states.list.some);
  let lengthof = useSelector((states) => states.cart);
  let ste = useSelector((states) => states.list.status);

  useEffect(() => {
    patches(as());
    //     async function fect(){

    //         let th=await fetch("https://fakestoreapi.com/products")
    //         let next=await th.json()
    //         console.log(next)
    // et(next)
    //     }
    //     fect()
  }, []);

  if(ste===status.loading){
    return(    
        <h3 >loading.....</h3>

       )  
    }
      if(ste===status.error){
        return(
          <h6>Some thing went rong</h6>
          )
        }
        
   return (
    <main id="kp">
      <br />
      <span>total{lengthof.length} </span>

      {soe.map((k) => (
        <main id="sp">
          <img src={k.image}></img>
          <span id="sy">{k.title} </span>
          <button
            onClick={() => {
              patches(add(k));
            }}
          >
            HERE
          </button>
        </main>
      ))}
    </main>
  );
}
export default Home;
