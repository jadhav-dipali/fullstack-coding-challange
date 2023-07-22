import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home";
import Product from "./Product";
import Order from "./Order";


export default function AppRouter(){
    return<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </BrowserRouter>
    </>
}