import express from "express";
import user from "./Routes/User/User";
const app = express();
const PORT : number | string = process.env.PORT || 8000;

app.use('/user',user);

app.get('/',(req,res)=>{
    res.send('hi -Server ! ');
});


app.listen(PORT,()=>{
    console.log(`
        App Is Running On port:${PORT}\nSource:http://localhost:${PORT}`);
    
});