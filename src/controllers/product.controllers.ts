import { Request, Response } from 'express';
import Product from '../models/product.models';

export async function addProduct(req: Request, res: Response): Promise<Response> {
    const newProduct = new Product({
        name: req.body.name,
        type: req.body.type,
        sellIn: req.body.sellIn,
        startingPrice: req.body.startingPrice,
        actualPrice: req.body.startingPrice
    });
    const productSaved = await newProduct.save();
    return res.json({
        message: "product successfully created",
        productSaved
    });
}

export async function getProducts(req: Request, res: Response): Promise<Response> {
    const products = await Product.find();
    return res.json({
        message: "all products",
        products
    });
}