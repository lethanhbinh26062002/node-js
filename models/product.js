import mongoose,{Schema,ObjectId} from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        index: true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps: true});
export default mongoose.model("Product", productSchema);