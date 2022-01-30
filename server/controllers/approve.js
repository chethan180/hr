import staff from "../models/staff.js";
import leaveBalance from "../models/leaveBalance.js";
import leave from "../models/leave.js";


export const approvee = async (req,res) =>{
    const x = req.body;
    try{
        const z = x.Emp_Id;
        console.log(z);

        const result = await leave.find({ 'Approver_Id': x.Emp_Id ,'is_Approved' : ""}).exec();
        const data = [];
        console.log("hi" , data);
        console.log(result);
        for(var xyz in result){
            console.log("hello" , xyz);
            const y = await staff.findOne({'Emp_Id' : xyz.Emp_Id});
            console.log(hi , y);
            y = {...xyz , Dept : y.Dept , Sub_Dept : y.Sub_Dept ,Doj : y.Doj ,Contact : xyz.Contact ,Email : xyz.Email }
            data.push(y);
        }

        console.log(data);
        // return res.status(200);
        return res.status(200).json(result );


    }catch(error){
        return res.status(500).json({message: error.message});
    }

}

// Emp_Id: { type: String, required:  true  },
// Staff_Name: { type: String, required: true },
// Dept: { type: String, required: true },
// Sub_Dept: { type: String, required: true },
// Doj: { type: String, required: true },
// Designation: { type: String, required: true },
// Contact: { type: String, required: true },
// Email: { type: String, required: true },
// Type: { type: String, required: true },
// Password: { type: String, required: true },
// Reset_Token: { type: String, required: true },
// Reset_Expire: { type: Boolean, default:false ,required: true },