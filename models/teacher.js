import mongoose from "mongoose";

const teacherSchema=new mongoose.Schema({
    surname:{type:String,trim:true,required:true},
    name:{type:String,trim:true,required:true},
    mobile:{type:Number,required:true},
    address:{type:String,required:true},
    qualification:{type:String,required:true}
})


const teacherModel=mongoose.model('teacher',teacherSchema)

export default teacherModel