import express from "express";
import { hi } from "../controllers/hi.js";

const route = express.Router();
route.get('/' , hi)

export default route;