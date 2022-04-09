import Comment from "../models/comment"
export const comments = async (req, res) => {
    try {
        const comment = await new Comment(req.body).save();
        res.json(comment)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không comment được"
        });
        console.log(error);
    }
};