import express from "express"
 import cors from "cors"
 import 'dotenv/config'
 import cookieParser from "cookie-parser"
 import connectDB from "./config/mongodb.js"
 import authRoute from './routes/authRoutes.js'  
 const app = express();
    const port = process.env.PORT || 3000

connectDB();// import this
    app.use(express.json());
     app.use(cookieParser());
     app.use(cors({credentials:true}))
// API endpoint
      app.get( '/' , (req, res )=>{
        res.send("API working")
      })
      app.use('/api/auth' , authRoute)

app.listen(port, () => console.log(`server started on PORT: ${port}`));
