import "../Style/landing.css"
import {Link} from "react-router-dom"
export default function LandingPage(){
    return<div className="landing-page-container">
         <div className="left-side-landing">
            <h1>Online Market</h1>
           <h4>Lets Start The Online Shoping , for exciting Prices Please sign below</h4>
           <h4>
           <Link to="/login">Log-In </Link> or <Link to="/register"> Sign-Up</Link> 
           </h4>
         </div>
         <div className="right-side-landing">

         </div>
    </div>
}