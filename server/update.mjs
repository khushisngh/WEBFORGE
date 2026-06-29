import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
const result = await mongoose.connection.db.collection("websites").updateMany(
  { user: { $exists: false } },
  { $set: { user: new mongoose.Types.ObjectId("6a3fe7b605d76c22ff30989b") } }
)
console.log("Updated:", result.modifiedCount)
process.exit()
