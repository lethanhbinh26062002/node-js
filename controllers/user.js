import User from "../models/user";
import jwt from "jsonwebtoken"
export const userList = async (req, res,) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được danh sách user",
            error: error
        })
    }
};
export const signUp = async (req, res) => {
    const {name,email,password} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if (existUser) {
            res.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        const user = await new User({name,email,password}).save();
        res.json({
            message: "Đăng ký thành công",
            user :{
                _id: user._id,
                email: user.email,
                name: user.name,
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không đăng ký được tài khoản",
            error: error
        });
    }
};
export const signIn = async (req, res) => {  
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if (!user) {
            res.status(400).json({message: 'Email không tồn tại'});
        }
        if(!user.authenticate(password)) {
            res.status(400).json({message: 'Sai mật khẩu'});
        }
        const token = jwt.sign({_id: user._id},"bin26",{expiresIn: 60*60 }) // jwt.sign(): Tạo token __________ expiresIn: Settime tồn tại token
        res.json({
            token: token,
            user:{
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        console.log(error);
    }
};