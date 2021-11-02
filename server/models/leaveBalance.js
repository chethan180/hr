import mongoose from "mongoose";

const LeaveBalanceschema = mongoose.Schema({
  Emp_Id: { type: String, required:  true },
  Staff_Name: { type: String, required: true },
  Designation: { type: String, required: true },
  CL: { type: String, required: true },
  EL: { type: String, required: true },
  ML: { type: String, required: true },
  COMP_OF: { type: String, required: true },
  Year: { type: String, required: true },
    
});

export default mongoose.model("leaveBalance", LeaveBalanceschema , "leaveBalance");