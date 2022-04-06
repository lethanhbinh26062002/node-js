import Product from "../models/product";
import toastr from "toastr"
export const list = async (req, res,) => {
    try {
        const products = await Product.find().sort({ createAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không list được sản phẩm"
        })
    }
};
export const real = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const product = await Product.findOne(filter).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không đọc được sản phẩm"
        })
    }
};
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không thêm được sản phẩm"
        });
        console.log(error);
    }
};
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const product = await Product.findOneAndDelete(condition).exec();
        res.json({
            message: "Đã xóa thành công sản phẩm",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
};
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const options = { new: true }
    try {
        const product = await Product.findOneAndUpdate(condition, doc, options);
        toastr.success("Update thành công");
        message: "Đã update thành công";
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Lỗi không update đc sản phẩm" })
    }
};
export const search = async (req, res) => {
    const searchString = req.query.q;
    try {
        const product = await Product.find({$text: {$search: searchString}})
        res.json(product);
    } catch (error) {
        console.log(error);
    }
};