const express =require("express");
const Router = express.Router();
const {PostProduct,getProduct} =  require("../controller/controllerProduct")


Router
.route('/')
.post(PostProduct)
.get(getProduct)


module.exports= Router;