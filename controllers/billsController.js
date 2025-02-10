const billsModel=require("../models/billsModel")
//add items
const addBillsController=async(req,res)=>{
    try {
        const newBill=new billsModel(req.body)
        await newBill.save()
        res.send("Bill Created Successfully!")
    } catch (error) {
        res.send("error")
        console.log(error) 
    }
}

//get bill
const getBillsController=async(req,res)=>{
    try{
        const bills=await billsModel.find()
        res.send(bills)
    }catch(error){
        console.log(error)
    }
}


module.exports={addBillsController,getBillsController}