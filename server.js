import express from "express"
 import cors from "cors"
 import 'dotenv/config'
 import cookieParser from "cookie-parser"
 import connectDB from "./config/mongodb.js"
   const app = express();
    const port = process.env.PORT || 3000

connectDB();// import this
    app.use(express.json());
     app.use(cookieParser());
     app.use(cors({credentials:true}))
      app.get( '/' , (req, res )=>{
        res.send("API working")
      })

app.listen(port, () => console.log(`server started on PORT: ${port}`));
