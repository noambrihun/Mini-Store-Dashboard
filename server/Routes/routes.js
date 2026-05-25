//* Routes
const express = require("express");
const router = express.Router();
const Product = require("../products/producrs");
router.get("/", async (req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post("/", async (req,res)=>{
    try {
        const {title, price, category, stock, description} = req.body;
        const product = new Product({title, price, category, stock, description});
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.delete("/:id", async (req,res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully", deletedProduct});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.patch("/:id", async (req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedProduct) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product updated successfully", updatedProduct});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.get("/search/:title", async (req,res)=>{
    try{
        const {title} = req.params;
        const products = await Product.find({title: {$regex: title, $options: "i"}});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

})

router.get("/category/:category", async (req,res)=>{
    try{
        const {category} = req.params;
        const products = await Product.find({category: {$regex: category, $options: "i"}});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
module.exports = router;