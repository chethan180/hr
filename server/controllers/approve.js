import staff from "../models/staff.js";
import leaveBalance from "../models/leaveBalance.js";
import leave from "../models/leave.js";


export const approvee = async (req,res) =>{
    const x = req.body;
    try{
        const z = x.Emp_Id;
        console.log(z);

        const result = await leave.find({ 'Approver_Id': x.Emp_Id ,'is_Approved' : ""}).exec();
        // return res.status(200);
        console.log(result);
        return res.status(200).json({result});


    }catch(error){
        return res.status(500).json({message: error.message});
    }

}