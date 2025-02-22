import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./DB/connectDB.js"
import productRoute from "./routes/product.route.js"
import bodyParser from "body-parser"
dotenv.config()

const app=express()
const PORT=process.env.PORT || 3000

app.use(cors{
    credentials: true,
    origin: [
      "http://localhost:5173"
      
    ],
})
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/products",productRoute)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

const serverConnect=async()=>{
    
   try {
    connectDB()
    app.listen(PORT,()=>{
        console.log(`Server is Rumnning on http://localhost:${PORT}`);
        
    })
   } catch (error) {
    console.error(error)
   }
}

serverConnect()