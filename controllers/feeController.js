import e from "express";
import mongoose from "mongoose";
import feeModel from "../models/Fee.js";

class FeeController {
  static getFee = async (req, res) => {
    try {
      const studentId = req.params.id;
      const feeYear = req.body.year;
      const feeMonth = req.body.month;
      const feeAmount = req.body.amount;
      const feeAmountInDecimal = Number(feeAmount);
      const createdBy = "Dhruvik";
      var currentdate = new Date();
      var datetime =
        "Last Sync: " +
        currentdate.getDay() +
        "/" +
        currentdate.getMonth() +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      const feeComment = req.body.comment;
      const data = new feeModel({
        studentId: studentId,
        feeYear: feeYear,
        feeMonth: feeMonth,
        amount: feeAmountInDecimal,
        createDate: datetime,
        createdBy: createdBy,
        comment: feeComment,
      });
      await data.save();
      res.redirect("/student");
    } catch (err) {
      console.log(err);
    }
  };
  static editFeePage = async (req, res) => {
    try {
      const id = req.params.id;
      const studentData = await feeModel.findById({ _id: id });

      res.render("editFeePage", { data: studentData });
    } catch (err) {
      console.log(err);
    }
  };

  static editFee = async (req, res) => {
    try {
      const id = req.params.id;
      const newFee = req.body.amount;
      await feeModel.updateOne({ _id: id }, { amount: newFee });
      res.redirect("/student");
    } catch (err) {
      console.log(err);
    }
  };

  static pendingFeePage=async(req,res)=>{
    try{
      const studentId=req.params.id
      const studentData=await feeModel.find({studentId:studentId})
      let months=[]
      let currentmonths=['01','02','03','04','05','06','07']
      studentData.forEach((e)=>{
        if(e.feeMonth == 'January')
        {
          months.push('01')
        }
        if(e.feeMonth == 'Febraury')
        {
          months.push('02')
        }
        if(e.feeMonth == 'March')
        {
          months.push('03')
        }
        if(e.feeMonth == 'April')
        {
          months.push('04')
        }
        if(e.feeMonth == 'May')
        {
          months.push('05')
        }
        if(e.feeMonth == 'June')
        {
          months.push('06')
        }
        if(e.feeMonth == 'July')
        {
          months.push('07')
        }
        if(e.feeMonth == 'August')
        {
          months.push('08')
        }
        if(e.feeMonth == 'September')
        {
          months.push('09')
        }
        if(e.feeMonth == 'October')
        {
          months.push('10')
        }
        if(e.feeMonth == 'November')
        {
          months.push('11')
        }
        if(e.feeMonth == 'December')
        {
          months.push('12')
        }
      }) 
    currentmonths = currentmonths.filter( ( el ) => !months.includes( el ) );
   

      res.render('pendingFeePage',{data:studentData,month:currentmonths,year:'2022',student:studentId})
    }
    catch(err)
    {
      console.log(err)
    }
  }
}
//   static pendingFeePage = async (req, res) => {
//     try {
//       const studentIds = [];
//       const studentData = await feeModel.find();
//       studentData.map((element) => {
//         studentIds.push(element.studentId);
//       });
//       let chars =studentIds
//       let uniqueStudentIds = [];
//       chars.forEach((c) => {
//         if (!uniqueStudentIds.includes(c)) {
//           uniqueStudentIds.push(c);
//         }
//       });

//       uniqueStudentIds.forEach(async(studentid)=>{
//         let flag=false;
//         console.log(studentid)
//         const singleStudentData=await feeModel.find({studentId:studentid,feeYear:'2022'})
//         console.log(singleStudentData)
        
//         // singleStudentData.map((element)=>{
//         //     if((element.feeMonth=='01' && element.feeMonth=='02' && element.feeMonth=='03' && element.feeMonth=='04' && element.feeMonth=='05' && element.feeMonth=='06' && element.feeMonth=='07') && element.feeYear=='2022')
//         //     {

//         //     }
//         // })
//       })
//       res.render("pendingFeePage", { data: studentData });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }




export default FeeController;
