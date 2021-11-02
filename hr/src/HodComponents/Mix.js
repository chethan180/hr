import React ,{useState} from "react";
import {BrowserRouter as Router } from "react-router-dom";
// import CardDetail from "./CardDetail";
import Approval from "./Approval";
import CardDetails from "./CardDetail";

const data = [
    {
      key:"1",
      Company: "hi",
      Department: "cse",
      Firstname: "chethan",
      Lastname: "rao",
      LeaveReason: "Health Issues",
      Leavetype: "Paid",
      Organization: "mahindra",
      RequestedLeave: "2",
      email: "chethanrao999@gmail.com",
      phone: "9876434312",
      status:"pending",
      from : "2021-10-07 22:05:24",
      to : "2021-10-08 22:05:30",    
    },
    {
      key: '2',
      Company: "hi",
      Department: "cse",
      Firstname: "rohan",
      Lastname: "rao",
      LeaveReason: "Health Issues",
      Leavetype: "Paid",
      Organization: "mahindra",
      RequestedLeave: "2",
      email: "chethanrao999@gmail.com",
      phone: "9876434312",
      status:"pending",
      from : "2021-10-07 22:05:24",
      to : "2021-10-08 22:05:30",
    },
    {
      key: '3',
      Company: "hi",
      Department: "cse",
      Firstname: "yu",
      Lastname: "rao",
      LeaveReason: "Health Issues",
      Leavetype: "Paid",
      Organization: "mahindra",
      RequestedLeave: "2",
      email: "chethanrao999@gmail.com",
      phone: "9876434312",
      status:"pending",
      from : "2021-10-07 22:05:24",
      to : "2021-10-08 22:05:30",
    },
  ];
const Mix =() => {
    const [ids , setids] = useState('');
    
    const handchange = (value) => {
        setids(value);
    }
    let x;
    // console.log(ids);
    for(let val of data )
    {
        if(val.key === ids)
        {
             x = val;
        }
    }

    return(
        <Router>
            <main>
                <CardDetails data = {x} val = {ids}/>
                <Approval data = {data} change={handchange} />  
            </main>
        </Router>
    );
}
export default Mix;