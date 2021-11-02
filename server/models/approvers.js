import mongoose from "mongoose";

const ApprovalSchema = mongoose.Schema({
  Emp_Id: { type: String, required:  true },
  Approver_Id: { type: String, required: true },
  Higher_Id: { type: String, required: true },
});

export default mongoose.model("Approval", ApprovalSchema , "Approvals");