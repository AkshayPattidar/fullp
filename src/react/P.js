import React, { useState } from "react"
import { Selector, useSelector } from "react-redux"

function P(){
    let c=useSelector((state)=>state.Reduc.data)
    console.warn(c)
    
 return(
     <>
        
        <span>{c}</span>
        {/* {
            c.map((z)=>
            
            <span>{z} </span>
            )
        } */}
        
        </>
    )
}
export default P