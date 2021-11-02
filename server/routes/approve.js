import express from 'express';
import { approvee } from '../controllers/approve.js';

const Approve = express.Router();
Approve.post('/' , approvee);

export default Approve;