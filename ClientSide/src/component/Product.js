import "../Style/product.css"
import Ract ,{useEffect, useState, useContext} from "react"
import TopNav from "./TopNav"
import{NotiContext} from "../Context/ProductContex"


const API = "http://localhost:4000/product";



export default function Product(){
   
    const [data, setData] = useState([]);

    useEffect(()=>{
      fetch(API)
      .then((res)=>res.json())
      .then((res)=>setData([...res.data]))
    },[])

    const {num,setNum,setAddProduct}= useContext(NotiContext);
    // const num =useContext(NotiContext);
    
     function AddToCard(id){
        setNum(num+1)
       let ans= data.find(e=>e._id===id);
       setAddProduct(d=>[...d,ans]);    
     }
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
      
   </div>  

   <div id="image-container">
     <img src={d.image} id="img-item"/>
   </div>
   <div id="price-container">
       <h3>{d.prize}</h3>
       <button id="btn" onClick={()=>AddToCard(d._id)}>Add To Card</button>
   </div>
 
</div>

   })}
   </div>
</div>
</>
}