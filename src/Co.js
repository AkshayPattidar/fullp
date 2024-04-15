import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

function Co(props){
    let {Cp}=props;

        let v=useNavigate()

    useEffect(()=>{
        let st=localStorage.getItem('Y')
        if(!st)
         v('/Y')
        
    }) 
    return(
        <div>

    <Cp/>

        </div>
    )
}
export default Co