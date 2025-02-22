import Product from "../models/product.model.js"

export const GetSingleProduct=async(req,res)=>{
  

 try {
    const singleProduct=await Product.findById(req.params.id)
 
    if(!singleProduct){
      return res.status(400).json({message:"Unable to get Product"})
    }
    return res.status(200).json(singleProduct)
    
 } catch (error) {
    console.error(error)
    return  res.status(400).json({message:error.message})
    
 }

  


}
export const GetAllProduct=async(req,res)=>{
    try {
    const product  =  await Product.find()
    return res.status(200).json(product)
  
    } catch (error) {
        console.error(error)
        return  res.status(400).json({message:error.message})
    }

}
export const CreateProduct=async(req,res)=>{
try {
    const { name,description,amount,imgUrl}=req.body
const newProduct= new Product({
    name,description,amount,imgUrl
})
await newProduct.save()
return res.status(201).json({newProduct})

} catch (error) {
    console.error(error)
    return res.status(400).json({message:error.message})
}
}
export const UpdateProduct=async(req,res)=>{
   try {
    const{name,description,amount,imgUrl}=req.body
    const updatedProduct=await Product.findByIdAndUpdate({_id:req.params.id},{
        name,
        description,
        amount,
        imgUrl
    },
{
    new:true
})

return res.status(200).json(updatedProduct)
   } catch (error) {
    console.error(error)
    return res.status(400).json({message:error.message})
    
   }

}
export const DeleteProduct=async(req,res)=>{
await Product.findByIdAndDelete({_id:req.params.id})
return res.status(200).json({message:"Product Delected"})
}