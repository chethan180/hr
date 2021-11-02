import express from 'express';
import {pute} from "../controllers/put.js";

const Put = express.Router();
Put.post("/" ,pute);

export default Put;