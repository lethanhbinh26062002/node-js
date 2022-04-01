import expressJWT from "express-jwt";
export const checkAuth = (req, res, next) => {
    const status = true;
    if(status){
        next();
    } else {
        console.log("Lỗi truy cập");
    };
};
export const requireSignin =  expressJWT({
    algorithms: ["HS256"], // Key "HS256"
    secret: "bin26",
    requestProperty:"auth" // Gán thông tin vào req.auth
})
export const isAuth = (req, res,next) => {
    const status = req.profiles._id = req.auth._id; // So sánh id giữa clien vs server
    // console.log("req.profiles",req.profiles);
    // console.log("req.auth",req.auth);
    if(!status) {
        res.status(400).json({
            message: "Bạn không có quyền truy cập"
        })
    }
    next();
}
export const checkAdmin = (req, res, next) => {
    const checkRole = req.auth.role = 1;
    if(!checkRole) {
        res.status(400).json({
            message: "Bạn không có quyền admin"
        })
    }
    next();
}
