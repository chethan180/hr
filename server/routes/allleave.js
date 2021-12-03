import express from "express";
import { allleavee } from "../controllers/allleave.js";

const Allleave = express.Router();
Allleave.post('/' , allleavee);

export default Allleave;