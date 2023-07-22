const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true 
    },
    prize:{
        type:String,
        require:true
    }
})

const Products = new mongoose.model("Product" , ProductSchema);
module.exports = Products;