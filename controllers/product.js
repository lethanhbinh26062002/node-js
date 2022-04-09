import Product from "../models/product";
import Comment from "../models/comment"
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
    const filter = { _id: req.params.id }
    try {
        const product = await Product.findOne(filter).exec();
        const id_comment = product.comment
        const comment =  await Comment.findOne(id_comment).exec();
        res.json(product);
        console.log("comment",comment);
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
        message: "Đã update thành công";
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Lỗi không update đc sản phẩm" })
    }
};
export const search = async (req, res) => {
    const searchString = req.query.q;
    try {
        const product = await Product.find({ $text: { $search: searchString } })
        res.json(product);
    } catch (error) {
        console.log(error);
    }
};
export const paginate = async (req, res) => {
    const pageOptions = {
        page: parseInt(req.query.page),//0
        limit: parseInt(req.query.limit)//5
    }
    try {
        const product = await Product.find()
            .skip(pageOptions.page * pageOptions.limit) // bỏ qua sp
            .limit(pageOptions.limit) // giới hạn sp
            .exec();
            // ?page=0&limit=5
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Lỗi không phân trang được" })
        console.log(error);
    }
}
export const searchPrice = async (req, res) => {
    const priceOptions = {
        min: parseInt(req.query.min),
        max: parseInt(req.query.max)
    }
    try {
        const product = await Product.find({ price: { $gte:priceOptions.min, $lte:priceOptions.max} });
        //?min=0&max=200
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Lỗi không lọc được theo giá" })
        console.log(error);
    }
}