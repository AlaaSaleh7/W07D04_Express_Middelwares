const express = require("express");

const app = express();

const authRouter =express.Router();

const port = 3000;

const users = ["John", "Mark"];

app.get("/users",(req,res,next)=>{
res.json(users);
});

//puls check
//q1
 const logUsers =(req,res,next)=>{
    console.log(users);
    next()
 };
 app.use(logUsers);
//--------------------------------------------------------------------

//q2
app.use((req,res,next)=>{
    res.json(users);
    next();
});
//--------------------------------------------------------------------

//q3
const logMethod=("/users",(req,res,next)=>{
console.log(req.method);
next()
});
app.use(logMethod);
//--------------------------------------------------------------------

//q4
app.use(express.json());
//--------------------------------------------------------------------

//q5
app.get("/", (req, res, next) => {
    const err = new Error("Internal server error");
    err.status = 500;
    next(err);
  });
  
app.use((err,req,res,next)=>{
if(users){
    res.json(
        {
       status:err.status,
       massage:err.massage,
        }
    )
}
});
//--------------------------------------------------------------------
//practice
//q1
authRouter.use("/users", (req, res, next) => {
   res.json(users);
    next();
  });

  app.use("/auth", authRouter);
//--------------------------------------------------------------------

//q2

//--------------------------------------------------------------------
app.listen(port,()=>{
console.log(`Example app listening at http://localhost:${port}`);
});