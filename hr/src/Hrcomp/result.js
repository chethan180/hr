import React from 'react';
import { Descriptions } from 'antd';
import { Table } from 'antd';
const { Column } = Table;


const  Result = (props)=>{
    const {edata} = props
    console.log(edata[0][2]);
    const x = [];
    x.push(edata[0][2]);
    return(

  <div>
    <Descriptions
      title = "Employee Data"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <Descriptions.Item label="Employee Id">{edata[0][0].Emp_Id}</Descriptions.Item>
      <Descriptions.Item label="Name">{edata[0][0].Staff_Name}</Descriptions.Item>
      <Descriptions.Item label="Email">{edata[0][0].Email}</Descriptions.Item>
      <Descriptions.Item label="Contact">{edata[0][0].Contact}</Descriptions.Item>
      <Descriptions.Item label="Designation">{edata[0][0].Designation}</Descriptions.Item>
      <Descriptions.Item label="Department">{edata[0][0].Dept}</Descriptions.Item>
      <Descriptions.Item label="Doj">{edata[0][0].Doj}</Descriptions.Item>
      <Descriptions.Item label="Sub_dept">{edata[0][0].Sub_dept}</Descriptions.Item>
      <Descriptions.Item label="Type">{edata[0][0].Type}</Descriptions.Item>
    </Descriptions>

    <br/>

    <Table dataSource={edata[0][1]} responsive = "md">
      {/* <ColumnGroup title="Name">
        <Column title="Firstname" dataIndex="Firstname" key="Firstname" />
        <Column title="Lastname" dataIndex="Lastname" key="Lastname" />
      </ColumnGroup>
      <Column title="Company" dataIndex="Company" key="Company" />
      <Column title="Department" dataIndex="Department" key="Department" /> */}
      <Column title="Leave_Applied_Date" dataIndex="Leave_Applied_Date" key="Leave_Applied_Date" />
      <Column title="Leavetype" dataIndex="Leave_Category" key="Leave_Category" />
      {/* <Column title="email" dataIndex="email" key="email" />
      <Column title="phone" dataIndex="phone" key="phone" /> */}
      <Column title="From" dataIndex="From" key="From" />
      <Column title="To" dataIndex="To" key="To" />
      {/* <Column title="RequestedLeave" dataIndex="RequestedLeave" key="RequestedLeave" />         */}
      <Column title="status" dataIndex="is_Approved" key="is_Approved" />

    </Table>

    <br/>

    <Table dataSource={x} responsive = "md">
      <Column title="CL" dataIndex="CL" key="CL" />
      <Column title="ML" dataIndex="ML" key="ML" />
      <Column title="EL" dataIndex="EL" key="EL" />
      <Column title="COMP_OF" dataIndex="COMP_OF" key="COMP_OF" />
      <Column title="Year" dataIndex="Year" key="Year" />

    </Table>


  </div>
);
    }

        

export default Result;