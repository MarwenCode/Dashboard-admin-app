import express from "express";
import Product from "../models/Product.js";
const productRoute = express.Router();

//Create product
productRoute.post("/", async(req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
        
    } catch (error) {
        res.status(500).json(error)
    }
});


//get all products
productRoute.get("/", async(req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json(error)
    }

})

//delete a product
productRoute.delete("/:id", async(req, res) => {
    try {

        const product = await Product.findById(req.params.id)
            try {
                await product.deleteOne();
                res.status(200).json("product has been deleted");
                
            } catch (error) {
                res.status(500).json(error);
                
            }
    
    } catch (error) {
        res.status(500).json(error);
        
    }
})



export default productRoute;