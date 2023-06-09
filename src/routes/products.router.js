import { Router } from "express";

const router = Router();

import ProductsManager from "../clases/ProductsManager.js";

const productsManger = new ProductsManager()

router.get("/", async (req, res) => {
    const products = await productsManger.getProducts(req.query.limit)
    res.send(products)
});

router.get("/:id", async (req, res) => {
    const productId = await productsManger.getProductById(req.params.id)
    res.send(productId)
})

router.post("/", async (req, res) => {
    const product = req.body;
    const newProduct = await productsManger.createProducts(product)
    res.send(newProduct);
})

router.put("/:id", async (req, res) => {
    const prodId = req.params.id;
    const prodUp = req.body;
    const updateProd = await productsManger.updateProduct(prodId, prodUp)
    res.send(updateProd)
})

router.delete("/:id", async (req, res) => {
    const params = req.params.id
    const productId = await productsManger.deleteProductById(params)
    res.send({productId})
})

export default router;
