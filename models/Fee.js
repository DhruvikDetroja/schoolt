import mongoose from "mongoose";

const feeSchema=new
        mongoose.Schema({
            studentId:{type:String,required:true,trim:true},
            feeYear:{type:String,required:true},
            feeMonth:{type:String,required:true,trim:true},
            amount:{type:mongoose.Decimal128,required:true},
            createDate:{type:String,required:true},
            createdBy:{type:String,required:true,trim:true},
            comment:{type:String}
        })


const feeModel= mongoose.model('fee',feeSchema)

export default feeModel