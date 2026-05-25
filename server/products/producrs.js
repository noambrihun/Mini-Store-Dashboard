//* Product Model
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {

    },
    stock: {
        type: Number,
    },
   description: {
    type: String,
   },
})
module.exports = mongoose.model("Product", productSchema);