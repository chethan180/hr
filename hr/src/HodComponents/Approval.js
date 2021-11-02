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
        <ColumnGroup title="Info">
        <Column title="Empid" dataIndex="key" key="key" />
          <Column title="Firstname" dataIndex="Firstname" key="Firstname" />
        </ColumnGroup>
        {/* <Column title="Company" dataIndex="Company" key="Company" />
        <Column title="Department" dataIndex="Department" key="Department" /> */}
        <Column title="LeaveReason" dataIndex="LeaveReason" key="LeaveReason" />
        <Column title="Leavetype" dataIndex="Leavetype" key="Leavetype" />
        {/* <Column title="email" dataIndex="email" key="email" />
        <Column title="phone" dataIndex="phone" key="phone" /> */}
        <Column title="from" dataIndex="from" key="from" />
        <Column title="to" dataIndex="to" key="to" />
        <Column title="RequestedLeave" dataIndex="RequestedLeave" key="RequestedLeave" />        
        {/* <Column title="status" dataIndex="status" key="status" /> */}

          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <Button type="link" onClick = {() => props.change(record.key) }>
                  View More
                </Button>
              </Space>
            )}
          />
        </Table>
      );
}
export default Approval;