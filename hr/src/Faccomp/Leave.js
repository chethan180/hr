import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
// import Left from './Left';
const { Column } = Table;

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
    key: '3',
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
];

const Leave= () =>
{
    return(
        <Table dataSource={data} responsive = "md">
        {/* <ColumnGroup title="Name">
          <Column title="Firstname" dataIndex="Firstname" key="Firstname" />
          <Column title="Lastname" dataIndex="Lastname" key="Lastname" />
        </ColumnGroup>
        <Column title="Company" dataIndex="Company" key="Company" />
        <Column title="Department" dataIndex="Department" key="Department" /> */}
        <Column title="LeaveReason" dataIndex="LeaveReason" key="LeaveReason" />
        <Column title="Leavetype" dataIndex="Leavetype" key="Leavetype" />
        {/* <Column title="email" dataIndex="email" key="email" />
        <Column title="phone" dataIndex="phone" key="phone" /> */}
        <Column title="from" dataIndex="from" key="from" />
        <Column title="to" dataIndex="to" key="to" />
        <Column title="RequestedLeave" dataIndex="RequestedLeave" key="RequestedLeave" />        
        <Column title="status" dataIndex="status" key="status" />

      </Table>
    );
}
;

export default Leave;


