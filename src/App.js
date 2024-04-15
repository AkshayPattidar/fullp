import logo from "./logo.svg";
import "./App.css";
import Home from "./Slice/Home.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cts from "./Slice/st.js";
import confi from "./Slice/store.js";
import { Link } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";

import { useEffect, useState } from "react";
 function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
   const [Job, setJob] = useState("");
   const [ev, evs] = useState(false);
  const [c, vs] = useState(false);
  const [C,sC] = useState(false);
  const [ss,setss ] = useState(false);
  const [l ,cl ] = useState(false);
  const [y,u ] = useState(false);//
  const [pa,upa] = useState(false);


const cho=/[a-z]/g
const bar=/[A-Z]/g
const sp=/\W/ig
const s=/\w/ig
 
function br(){
  if(Job.match(cho)){
    sC(true)
}
 
if(Job.match(bar)){
  cl(true)
}
 if(Job.match(sp)){
setss(true)
}
 if(Job.match(s)){
  upa(true)
}
  }

async function w(){
  const calcu={name,contact,email,Job}
 

 const how=await fetch("http://localhost:7000/",{

method:'POST',
headers:{
  'Content-Type':'application/json',
 },
body:JSON.stringify(calcu)


}
)
const u=await how.json()
console.log(u)


}

  return (
    <div className="App">
      <input type="text"   placeholder="name" required onChange={(k)=>{setname(k.target.value); if(3>name.length){evs(true)}else{evs(false)}   }   } /> {ev?<span>invalidname </span>:null}  <br />
      <input type="number"   placeholder="contact" required  onChange={(p)=>{setcontact(p.target.value);if(9>contact.length){vs(true)}else{vs(false)}   } }/>   {c?<span>Invalidcontact</span>:null}<br />
      <input type="text"   placeholder="Email" required onChange={(c)=>{setemail(c.target.value)}}   /><br />

      <input type="password"   placeholder="Job"    required  onChange={(p)=>{setJob(p.target.value)}}/>   <br />
      <span>
        
        one Lower case       {C?<span><MdVerifiedUser/></span>:null } <br />
        one Upper case       {l?<span><MdVerifiedUser/></span>:null }  <br />
        one Special symbol   {ss?<span><MdVerifiedUser/> </span>:null }   <br />
        one number symbol    {pa?<span><MdVerifiedUser/></span>:null }  <br />
      </span>
      
       <button onClick={()=>{w()}}>Login</button>
       <button onClick={()=>{br()}}>check</button>


    </div>
  )
}

export default App;
