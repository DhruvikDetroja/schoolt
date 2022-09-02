import mongoose from "mongoose"
import feeModel from "../models/Fee.js"
import studentModel  from "../models/Student.js"

class StudentController{
    static getAllDoc=async(req,res)=>{
        try{
            const result = await studentModel.find()
            res.render("index",{data:result})
        }
        catch(err){
            console.log(err)
        }
    }

    static createDoc=async(req,res)=>{
        try{
            const name=req.body.name
            const standard=req.body.standard
            const rollfrombody=req.body.roll
            const age=req.body.age
            //duplicate roll problem code
            const result = await studentModel.find({roll:rollfrombody})

            if(result.length==0){
            var data = new studentModel({name:name,standard:standard,roll:rollfrombody,age:age})
            await data.save()
            res.redirect("/student")
            }
            else{  
                // res.redirect("/student/createstudent")
                res.render('create',{visibility:"visible",name:name,roll:rollfrombody,age:age});
            }
        }
        catch(err){
            console.log(err)
        }

       
    }

    
    static createStudent=async(req,res)=>{
        // res.render('create',{data:{visibility:"invisible",name:name,standard:standard,age:age}})
        
        res.render('create',{visibility:"invisible",name:null,roll:null,age:null})
       
    }

    static editDoc=async(req,res)=>{
        try{
            var id=req.params.id
            var resultedit= await studentModel.findById(id)
            res.render('edit',{data:resultedit})
        }
        catch(err){
            console.log(err)
        }
        
    }

    static updateDocById=async(req,res)=>{
        try{
            var updateId=req.params.id
            var updateName=req.body.name
            var updateStandard=req.body.standard
            var updateRoll=req.body.roll
            var updateAge=req.body.age
            
            await studentModel.updateOne({_id:updateId},{name:updateName,standard:updateStandard,roll:updateRoll,age:updateAge})
            res.redirect('/student')
        }
        catch(err){
            console.log(err)
        }
       
    }

    static deleteDocById=async(req,res)=>{
        try{
            var deleteId=req.params.id
            await studentModel.deleteOne({_id:deleteId})
            res.redirect('/student')
        }
        catch(err){
            console.log(err)
        }
    }

    static collectFee=async(req,res)=>{
        try{
            const id=req.params.id
            const studentData=await studentModel.findById(id)
            
            res.render('collectFee',{data:studentData})
        }
    catch(err){
        console.log(err)
    }
    }

  
    static paidFee=async(req,res)=>{
        try{
            const id=req.params.id
            const data=await feeModel.find({studentId:id})
            res.render('paidFee',{data:data})
        }
        catch(err)
        {
            console.log(err)
        }
    }

}


export  default StudentController