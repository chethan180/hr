import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import route from './routes/hi.js'
import Apply from "./routes/apply.js";
import Past from './routes/past.js';
import Balance from './routes/balance.js';
import Approve from './routes/approve.js';
import Put from './routes/put.js';

import dotenv from 'dotenv';
dotenv.config();

let user = process.env.SECRET_MONGO_USER;
let pswrd = process.env.SECRET_MONGO_PSWD;

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/apply',Apply);
app.use('/leave',Past);
app.use("/users",route);
app.use("/balance",Balance);
app.use('/approve' , Approve);
app.use('/put' , Put);


const CONNECTION_URL = `mongodb+srv://${user}:${pswrd}@cluster0.p6xod.mongodb.net/HR?retryWrites=true&w=majority`;
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);