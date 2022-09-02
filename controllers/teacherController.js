import teacherModel  from "../models/teacher.js"

class TeacherController{
    static getAllDoc=async(req,res)=>{
        try{
            const result = await teacherModel.find()
            res.render("teacherindex",{data:result})
        }
        catch(err){
            console.log(err)
        }
    }

    static createDoc=async(req,res)=>{
        try{
            
            var Surname=req.body.surname
            var Name=req.body.name
            var Mobile=req.body.mobile
            var Address=req.body.address
            var Qualification=req.body.qualification
            
            var data = new teacherModel({surname:Surname,name:Name,mobile:Mobile,address:Address,qualification:Qualification})
            await data.save()
            res.redirect("/teacher")
        }
        catch(err){
            console.log(err)
        }

       
    }

    static editDoc=async(req,res)=>{
        try{
            var id=req.params.id
            var resultedit= await teacherModel.findById(id)
            res.render('teacheredit',{data:resultedit})
        }
        catch(err){
            console.log(err)
        }
        
    }

    static updateDocById=async(req,res)=>{
        try{
            var updateId=req.params.id
            var updateSurname=req.body.surname
            var updateName=req.body.name
            var updateMobile=req.body.mobile
            var updateAddress=req.body.address
            var updateQualification=req.body.qualification
           
            await teacherModel.updateOne({_id:updateId},{surname:updateSurname,name:updateName,mobile:updateMobile,address:updateAddress,qualification:updateQualification})
            res.redirect('/teacher')
        }
        catch(err){
            console.log(err)
        }
       
    }

    static deleteDocById=async(req,res)=>{
        try{
            var deleteId=req.params.id
            await teacherModel.deleteOne({_id:deleteId})
            res.redirect('/teacher')
        }
        catch(err){
            console.log(err)
        }
    }

    static createTeacher=async(req,res)=>{
        res.render('teachercreate')
    }



 
}


export  default TeacherController