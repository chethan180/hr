import React from 'react';
import { Table, Space, Button } from 'antd';
// import { useHistory } from 'react-router';
// import CardDetails from './CardDetail';

const { Column, ColumnGroup } = Table;



const Approval = (props) =>{
  

  const hello = props.data;
  // console.log(hello);
  
  return(
        <Table dataSource={hello}>
      {/* <ColumnGroup title="Name">
        <Column title="Firstname" dataIndex="Firstname" key="Firstname" />
        <Column title="Lastname" dataIndex="Lastname" key="Lastname" />
  </ColumnGroup> */}
      <Column title="Id" dataIndex="Emp_Id" key="Emp_Id" />
      {/* <Column title="Department" dataIndex="Department" key="Department" />  */}
      <Column title="Leave_Applied_Date" dataIndex="Leave_Applied_Date" key="Leave_Applied_Date" />
      <Column title="Leavetype" dataIndex="Leave_Category" key="Leave_Category" />
      {/* <Column title="email" dataIndex="email" key="email" />
      <Column title="phone" dataIndex="phone" key="phone" /> */}
      <Column title="From" dataIndex="From" key="From" />
      <Column title="To" dataIndex="To" key="To" />
      {/* <Column title="RequestedLeave" dataIndex="RequestedLeave" key="RequestedLeave" />         */}
      <Column title="status" dataIndex="is_Approved" key="is_Approved" />   
        {/* <Column title="status" dataIndex="status" key="status" /> */}

          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <Button type="link" onClick = {() => props.change(record.Emp_Id) }>
                  View More
                </Button>
              </Space>
            )}
          />
        </Table>
      );
}
export default Approval;