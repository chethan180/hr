import staff from "../models/staff.js";
import leaveBalance from "../models/leaveBalance.js";
import leave from "../models/leave.js";
// import Approval from "../models/approvers.js";


export const hre = async(req,res) => {
    // console.log(req.body);
    const x = req.body;
    const final = [];
    try{
        const oldStaff = await staff.findOne({ 'Emp_Id': x.Emp_Id });
        const oldStaffleaves = await leave.find({ 'Emp_Id': x.Emp_Id });
        const oldStafflb = await leaveBalance.findOne({ 'Emp_Id': x.Emp_Id });

        const each = [];
        each.push(oldStaff);
        each.push(oldStaffleaves);
        each.push(oldStafflb);

        final.push(each);

        return res.status(200).json(final);


    }catch(error){
        console.log(error.message);
    }
}