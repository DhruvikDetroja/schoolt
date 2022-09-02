import express from 'express'
import {connectDB} from './db/connectdb.js'
import path from 'path'
import {studentRouter,teacherRouter} from './routes/web.js'
const app=express()
//Database Connection
//mongodb+srv://dhruvik:GdsH8EXHWF1z34Xf@cluster0.vxbpcd4.mongodb.net/school?retryWrites=true&w=majority
const DATABASE_URL='mongodb+srv://dhruvik:GdsH8EXHWF1z34Xf@cluster0.vxbpcd4.mongodb.net/school?retryWrites=true&w=majority'
connectDB(DATABASE_URL)
//URL Encoded for post method
app.use(express.urlencoded({extended:false}))

//Static Files
app.use('/student',express.static(path.join(process.cwd(),"public")))

//Set Template Engine
app.set('view engine','ejs')

//Load Route
app.use('/student',studentRouter)

app.use('/teacher',teacherRouter)

const port=process.env.PORT || 4000
//Port 
app.listen(port,()=>{
    console.log('Listening to port 4000')
})