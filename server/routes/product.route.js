import express from "express"
import {GetSingleProduct,CreateProduct,GetAllProduct,UpdateProduct,DeleteProduct} from "../controllers/product.controller.js"


const router =express.Router()

router.get("/:id",GetSingleProduct)

router.get("/",GetAllProduct)

router.post("/",CreateProduct)

router.put("/:id",UpdateProduct)

router.delete("/:id",DeleteProduct)



export default router