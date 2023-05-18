import express from 'express';

const user = express.Router();
user.get('/',(req,res)=>{
    res.send('user Router')
})

export default user;
