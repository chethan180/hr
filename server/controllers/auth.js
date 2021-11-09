import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import staff from "../models/staff.js"
import dotenv from 'dotenv';
dotenv.config();

export const signin = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const oldUser = await staff.findOne({ Email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(Password, oldUser.Password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ Email: oldUser.Email, id: oldUser._id }, process.env.SECRET_SALT_VALUE, { expiresIn: "1h" });

    const Staff = {Emp_Id : oldUser.Emp_Id , Email : oldUser.Email , Password : oldUser.Password};

    res.status(200).json({ result: Staff, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

