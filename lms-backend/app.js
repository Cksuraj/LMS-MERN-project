import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { config } from 'dotenv';

config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));   //use to track user access url info middlewear [ use to lock info ]

app.use(cors({                                  // It used to to verfiy the domain is register or not on backedn side 
    origin:[process.env.FRONTEND_URL],
    credentials:true
}));

app.use('/',(req, res) =>{
    res.status(200).send('Server is up and running');
})

// if user try to access any other url it show error

app.use('*',(req,res)=>{
    res.status(404).send('OOPS ! Wrong url request')
})

export default app;