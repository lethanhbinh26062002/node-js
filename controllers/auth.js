import User from "../models/user";
export const userById = async (req, res, next,id) =>{
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profiles = user; // Gán thông tin user vào req.profiles={name,id,email,password}
        next();
    } catch (error) {
        
    }
}