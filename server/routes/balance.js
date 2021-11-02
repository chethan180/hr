import express from "express";
import { balancee } from "../controllers/balance.js";

const Balance = express.Router();
Balance.post('/' , balancee);

export default Balance;