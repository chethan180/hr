import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';


const { Column } = Table;

const data = [
{
    LeaveType:"Casual",
    Opening : "1",
    CurrentEntitlement : "3",
    LeavesAvailed : "1",
    Lapsed : "1",
    LeaveEncashed : "1",
    ClosingBalance : "1",
},
{
    LeaveType:"Casual",
    Opening : "1",
    CurrentEntitlement : "3",
    LeavesAvailed : "1",
    Lapsed : "1",
    LeaveEncashed : "1",
    ClosingBalance : "1",
},
{
    LeaveType:"Casual",
    Opening : "1",
    CurrentEntitlement : "3",
    LeavesAvailed : "1",
    Lapsed : "1",
    LeaveEncashed : "1",
    ClosingBalance : "1",
},
];

const Left = () => {
    return(
        <Table dataSource={data} responsive = "xs">
            <Column title="LeaveType" dataIndex="LeaveType" key="LeaveType" />
            <Column title="Opening" dataIndex="Opening" key="Opening" />
            <Column title="CurrentEntitlement" dataIndex="CurrentEntitlement" key="CurrentEntitlement" />
            <Column title="LeavesAvailed" dataIndex="LeavesAvailed" key="LeavesAvailed" />
            <Column title="Lapsed" dataIndex="Lapsed" key="Lapsed" />
            <Column title="LeaveEncashed" dataIndex="LeaveEncashed" key="LeaveEncashed" />
            <Column title="ClosingBalance" dataIndex="ClosingBalance" key="ClosingBalance" />
        </Table>

    );
}

export default Left;