import express from 'express';
import { hre } from '../controllers/hr.js';

const Hr = express.Router();
Hr.post('/' , hre);

export default Hr;