const Product = require("../model/ProductModel")

const PostProduct = async( req, res)=>{
  try {
     const data = new Product(req.body);
     const createdData = await data.save();
     res.status(201).json({status:"success" , data:createdData})
  } catch (error) {
    res.status(400).json({status:"fail" , message:error.message})
  }
}

const getProduct = async(req, res)=>{
  try {
    const data = await Product.find();
    res.status(200).json({status:"success" , data:data})
  } catch (error) {
    res.status(400).json({status:"fail" , message:error.message})
  }
}

module.exports = {
    PostProduct,
    getProduct,
}