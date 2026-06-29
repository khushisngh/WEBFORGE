import mongoose from "mongoose"

const connectDb = async () => {
    try {
        const uri = process.env.MONGODB_URI
        console.log("Connecting to:", uri ? uri.substring(0, 30) + "..." : "UNDEFINED")
        await mongoose.connect(uri)
        console.log("db connected")
    } catch (error) {
        console.log("db error:", error.message)
    }
}
export default connectDb
