import express from 'express'
import FeeController from '../controllers/feeController.js'
import StudentController from '../controllers/studentController.js'
import TeacherController from '../controllers/teacherController.js'

const studentRouter=express.Router()
const teacherRouter=express.Router()

//Student Routes
studentRouter.get('/',StudentController.getAllDoc)

studentRouter.post('/',StudentController.createDoc)

studentRouter.get('/edit/:id',StudentController.editDoc)

studentRouter.post('/update/:id',StudentController.updateDocById)

studentRouter.post('/delete/:id',StudentController.deleteDocById)

studentRouter.get('/createStudent',StudentController.createStudent)

studentRouter.get('/collectFee/:id',StudentController.collectFee)

studentRouter.post('/collectFee/:id',FeeController.getFee)

studentRouter.get('/editFeePage/:id',FeeController.editFeePage)

studentRouter.post('/editFeePage/:id',FeeController.editFee)

studentRouter.get('/paidFee/:id',StudentController.paidFee)

studentRouter.get('/pendingFeePage/:id',FeeController.pendingFeePage)

//Teacher Routes
teacherRouter.get('/',TeacherController.getAllDoc)

teacherRouter.post('/',TeacherController.createDoc)

teacherRouter.get('/edit/:id',TeacherController.editDoc)

teacherRouter.post('/update/:id',TeacherController.updateDocById)

teacherRouter.post('/delete/:id',TeacherController.deleteDocById)

teacherRouter.get('/createTeacher',TeacherController.createTeacher)




export {studentRouter,teacherRouter}

