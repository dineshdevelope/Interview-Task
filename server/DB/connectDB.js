import mongoose from "mongoose"

const connectDB=async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URl}`)
    console.log("MongoDB Connected");
    
} catch (error) {
    console.error(error)
    process.exit(1)
}
}

export default connectDB