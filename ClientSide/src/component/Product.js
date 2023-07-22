import "../Style/product.css"
import Ract ,{useEffect, useState} from "react"
import TopNav from "./TopNav"
import plus from "../Images/plus-icon-black-2.png"
import minus from "../Images/Minus-Symbol-PNG-Photo-Image.png"
const API = "http://localhost:4000/product"


export default function Product(){
   
    const [data, setData] = useState([]);

    useEffect(()=>{
      fetch(API)
      .then((res)=>res.json())
      .then((res)=>setData([...res.data]))
    },[])
    return <>
    <TopNav/>
    <div className="main-container">
     <div id="search-container">
    <input type="text" placeholder="Search by Name..."  id="search-input-feild" />
    <img src="https://cdn.icon-icons.com/icons2/3392/PNG/512/small_search_icon_213735.png" id="search-icon" />
    </div>
    <div className="container-of-card">
   {data.map((d , i)=>{
    return <div id="card" key={i}>
    <div className="branding-of-product">     
     <h4 id="brand">{d.name}</h4>
      <div className="quantity-of-product">
       <span className="quantity-naming">Quanitity</span>
       <div>
           <img  src={plus}  className="incremet-dec-btn"/>
           <span className="incremet-dec-btn">0</span>
           <img  src={minus} className="incremet-dec-btn"/>
       </div>
      </div>
   </div>  

   <div id="image-container">
     <img src={d.image} id="img-item"/>
   </div>
   <div id="price-container">
       <h3>{d.prize}</h3>
       <button id="btn">Add To Card</button>
   </div>
 
</div>

   })}
   </div>
</div>
</>
}