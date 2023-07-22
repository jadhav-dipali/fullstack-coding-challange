import logo from "../Images/logo.png";
import "../Style/topNav.css";
import {Link} from "react-router-dom"

export default function TopNav (){
     return<>
       <nav id="top-nav">
             <div id="nav-container">
             <Link to="/"> <h1 id="title">Online Market</h1></Link> 
                 <Link to="/product" ><h4 id="pro">Product</h4></Link>
                  <div  id="logo-container"> <img src={logo}  id="logo" /></div>
             </div>
         </nav>
     </>
 }
 