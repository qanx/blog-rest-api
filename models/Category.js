const mongoose = require("mongoose")

const CategorySechma = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
  

}) 

module.exports = mongoose.model("Category",CategorySechma)