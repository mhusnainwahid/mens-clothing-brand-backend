import mongoose from "mongoose"


export const mongoDb = async ()=>{
    try {
        const connectDb = mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb is connected!")
    } catch (error) {
        console.log("MongoDb is not connect!")
    }
}