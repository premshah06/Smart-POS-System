const express=require("express")
const { getItemController,addItemController,editItemController,deleteItemController } =require("../controllers/itemController")


const router=express.Router()

//routes
//get
router.get("/get-item",getItemController)

//post
router.post("/add-item",addItemController)

//put
router.put("/edit-item",editItemController)

//delete
router.post("/delete-item",deleteItemController)

module.exports=router