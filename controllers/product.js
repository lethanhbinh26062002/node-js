import mongoose from "mongoose";

const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
];
const Product = mongoose.model('Product', { name: String });
export const list = async (req, res,) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({message:"Lỗi không tìm đc sản phẩm"})
    }
};
export const real = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
};
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error){
        res.status(400).json({message: "Lỗi không thêm được sản phẩm"});
    }
};
export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
};
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
};