import mongoose from 'mongoose'

const studentSchema=new mongoose.Schema({
    name:{type:String ,required:true,trim:true},
    standard:{type:Number,required:true},
    roll:{type:Number,required:true},
    age:{type:Number,required:true,min:5,max:60},
})

const studentModel=mongoose.model("studentdata",studentSchema)

export default studentModel