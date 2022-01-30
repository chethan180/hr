import staff from "../models/staff.js";
import leaveBalance from "../models/leaveBalance.js";
import leave from "../models/leave.js";
import Approval from "../models/approvers.js";
// var x = {"Emp_Id" : "23" , "Staff_Name" : "dadn"}

export const applye = 
    async (req,res) => {
        // return res.status(200).json("hi there ");
        const x = req.body;
        try{
            // return res.json(x);
            const z  = x.Emp_Id;
            // console.log(z);
            const oldStaff = await staff.findOne({ 'Emp_Id': x.Emp_Id });
            // console.log(oldStaff);
            if (!oldStaff) return res.status(404).json({message : "User dosen't exist"});

            var y = x.Leave_Category;
            var date1 = x.From;
            var date2 = x.To;

            var diff =  Math.floor(( Date.parse(date2) - Date.parse(date1) ) / 86400000);
            // console.log(x.Emp_Id);
            if (!y) return res.status(404).json({message : "y prob"});
            const leaveb = await leaveBalance.findOne({ 'Emp_Id': x.Emp_Id });
            const approverdb = await Approval.findOne({ 'Emp_Id': x.Emp_Id })
            // console.log(x.Emp_Id);
            // console.log(approverdb);
            const approver = approverdb.Approver_Id;
            const Higher = approverdb.Higher_Id;
            // console.log(approver);
            // console.log(Higher);
            // console.log(leaveb);
            if(y === "CL" )
            {
                if(leaveb.CL > 0 && diff <= leaveb.CL){
                    const result = await leave.create({no_Of_Days : diff ,Emp_Id : x.Emp_Id ,Approver_Id:approverdb.Approver_Id,Higher_Id:approverdb.Higher_Id, Staff_Name : oldStaff.Staff_Name , Designation : oldStaff.Designation  , From : x.From , To : x.To ,Remarks : x.Remarks ,is_Approved : "" ,Leave_Category: x.Leave_Category ,  Leave_Applied_Date : x.Leave_Applied_Date });
                    // console.log(result);
                    return res.status(200).json(result);
                }
                else{
                    return res.status(202).json("not enough leaves on this type");
                }
            }

            if(y === "EL")
            {
                if(leaveb.EL > 0 && diff <= leaveb.EL){
                    const result = await leave.create({no_Of_Days : diff ,Emp_Id : x.Emp_Id ,Approver_Id:approverdb.Approver_Id,Higher_Id:approverdb.Higher_Id, Staff_Name : oldStaff.Staff_Name , Designation : oldStaff.Designation  , From : x.From , To : x.To ,Remarks : x.Remarks ,is_Approved : "" ,Leave_Category: x.Leave_Category ,  Leave_Applied_Date : x.Leave_Applied_Date });
                    // console.log(result);
                    return res.status(200).json(result);
                }
                else{
                    return res.status(202).json("not enough leaves on this type");
                }
            }

            if(y === "ML")
            {
                if(leaveb.ML > 0 && diff <= leaveb.ML){
                    const result = await leave.create({no_Of_Days : diff ,Emp_Id : x.Emp_Id ,Approver_Id:approverdb.Approver_Id,Higher_Id:approverdb.Higher_Id, Staff_Name : oldStaff.Staff_Name , Designation : oldStaff.Designation  , From : x.From , To : x.To ,Remarks : x.Remarks ,is_Approved : "" ,Leave_Category: x.Leave_Category ,  Leave_Applied_Date : x.Leave_Applied_Date });
                    // console.log(result);
                    return res.status(200).json(result);
                }
                else{
                    return res.status(202).json("not enough leaves on this type");
                }
            }

            if(y === "COMP_OF" )
            {
                if(leaveb.COMP_OF > 0 && diff <= leaveb.COMP_OF){
                    const result = await leave.create({no_Of_Days : diff ,Emp_Id : x.Emp_Id ,Approver_Id:approverdb.Approver_Id,Higher_Id:approverdb.Higher_Id, Staff_Name : oldStaff.Staff_Name , Designation : oldStaff.Designation  , From : x.From , To : x.To ,Remarks : x.Remarks ,is_Approved : "" ,Leave_Category: x.Leave_Category ,  Leave_Applied_Date : x.Leave_Applied_Date });
                    // console.log(result);
                    return res.status(200).json(result);
                }
                else{
                    return res.status(202).json("not enough leaves on this type");
                }
            }
            

            // const newStaff = new staff(x);
            // await newStaff.save();
            // return res.status(200).json(newStaff); 
        }catch(error){
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }

      }
