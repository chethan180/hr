import express from 'express';
import {paste} from "../controllers/past.js";

const Past = express.Router();
Past.post('/',paste);

export default Past;
