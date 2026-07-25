import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const connection = mongoose.connect(
            process.env.MONGODB_URI
        );
        console.log("connected")
    }
    catch(error){
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

export default connectDB;