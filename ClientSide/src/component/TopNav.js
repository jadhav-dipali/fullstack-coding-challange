import logo from "../Images/logo.png";
import "../Style/topNav.css";
import React,{useContext} from "react";
import {Link} from "react-router-dom"
import {NotiContext} from "../Context/ProductContex"

export default function TopNav (){
  const {num,setNum}= useContext(NotiContext)
     return<>
       <nav id="top-nav">
             <div id="nav-container">
             <Link to="/"> <h1 id="title">Online Market</h1></Link> 
                 <Link to="/product" ><h4 id="pro">Product</h4></Link>
                 <Link to="/order"><div   id="logo-container"> <img src={logo}  id="logo" onClick={()=>setNum(null)}/>{num&&<div id="adddd">{num}</div>}</div></Link>
             </div>
         </nav>
     </>
 }
 