import staff from "../models/staff.js";
import leave from "../models/leave.js";
import leaveBalance from "../models/leaveBalance.js";

export const pute = async(req,res) => {
    const x = req.body;
    try{
        const z = x.Emp_Id;
        const z1 = x.Request_Id;
        const y = x.Type;
        const y1 = x.num;
        const z3 = x.response;

        const oldStaff = await leave.findOne({ 'Emp_Id': x.Request_Id ,'Approver_Id' : x.Emp_Id ,'From' : x.From,'To' : x.To});

        const oldStaffBalance = await leaveBalance.findOne({'Emp_Id' : x.Request_Id});

        if(y === "CL")
        {
            if(oldStaffBalance.CL - y1 > 0 ){
                oldStaff.is_Approved = x.response;
                oldStaffBalance.CL = oldStaffBalance.CL - y1;
                await oldStaffBalance.save();
                await oldStaff.save();
                console.log(oldStaffBalance);
                console.log(oldStaff);
                return res.status(200).json({oldStaff});
            }
            else{
                return res.status(202).json("not enough leaves on this type");
            }
        }

        if(y === "EL")
        {
            if(oldStaffBalance.EL -y1> 0 ){
                oldStaff.is_Approved = x.response;
                oldStaffBalance.CL = oldStaffBalance.EL - y1;
                await oldStaffBalance.save();
                await oldStaff.save();
                console.log(oldStaffBalance);
                console.log(oldStaff);
                return res.status(200).json({oldStaff});
            }
            else{
                return res.status(202).json("not enough leaves on this type");
            }
        }

        if(y === "ML")
        {
            if(oldStaffBalance.ML -y1 > 0 ){
                oldStaff.is_Approved = x.response;
                oldStaffBalance.CL = oldStaffBalance.ML - y1;
                await oldStaffBalance.save();
                await oldStaff.save();
                console.log(oldStaffBalance);
                console.log(oldStaff);
                return res.status(200).json({oldStaff});
            }
            else{
                return res.status(202).json("not enough leaves on this type");
            }
        }

        if(y === "COMP_OF")
        {
            if(oldStaffBalance.COMP_OF -y1 > 0 ){
                oldStaff.is_Approved = x.response;
                oldStaffBalance.CL = oldStaffBalance.COMP_OF - y1;
                await oldStaffBalance.save();
                await oldStaff.save();
                console.log(oldStaffBalance);
                console.log(oldStaff);
                return res.status(200).json({oldStaff});
            }
            else{
                return res.status(202).json("not enough leaves on this type");
            }
        }


        // oldStaff.is_Approved = x.response;
        // await oldStaff.save();
        else{
            return res.status(200).json({oldStaff});
        }


    }
    catch(error){
        res.status(500).json({message :error.message});
    }

}
