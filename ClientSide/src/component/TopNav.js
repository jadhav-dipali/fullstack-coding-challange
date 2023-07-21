import logo from "../Images/logo.png";
import "../Style/topNav.css";

export default function TopNav (){
     return<>
       <nav id="top-nav">
             <div id="nav-container">
               <h1 id="title">Shopsy Store</h1>
                 <h4 id="pro">Product</h4>
                  <div  id="logo-container"> <img src={logo}  id="logo" /></div>
             </div>
         </nav>
     </>
 }
 