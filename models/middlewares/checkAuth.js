import expressJWT from "express-jwt";
export const checkAuth = (req, res, next) => {

};
export const requireSignin = expressJWT({
    algorithms: ["HS256"], // Key "HS256"
    secret: "bin26",
    requestProperty: "auth" // Gán thông tin vào req.auth
})
export const isAuth = (req, res, next) =>{
    console.log ('req.profile', req.profiles._id);
    console.log ('req.auth', req.auth._id);

    const status = req.profiles._id = req.auth._id
    if(!status){
        res.status(400).json({
        message: "Không có quyền truy cập"
        })
    }
    next();
}
export const checkAdmin = (req, res, next) => {
    const checkRole = req.auth.role = 1;
    if (!checkRole) {
        res.status(400).json({
            message: "Bạn không có quyền admin"
        })
    }
    next();
}
