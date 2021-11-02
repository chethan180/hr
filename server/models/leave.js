import mongoose from "mongoose";

const Leaveschema = mongoose.Schema({
  Emp_Id: { type: String, required:  true },
  Staff_Name: { type: String, required: true },
  Designation: { type: String, required: true },
  Leave_Applied_Date: { type: String, required: true },
  Leave_Category: { type: String, required: true },
  From: { type: String, required: true },
  To: { type: String, required: true },
  Remarks: { type: String },
  Approver_Id:{type : String },
  Higher_Id:{type : String },
  is_Approved: {type: String ,default:""}
});

export default mongoose.model("leave", Leaveschema);