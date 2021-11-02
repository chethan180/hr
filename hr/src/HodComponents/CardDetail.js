import { Descriptions,Button,Space } from 'antd';


  const CardDetails = (props)=>{
    if(props.val === ""){
      return(
        <div>
          
        </div>
      );
    }
    else {
      const x =  props.data; 
console.log(x);
// const y = props.val;
return(
    <div>
      <Descriptions
        title= {x.Firstname}
      //   actions={[
      //  <Button type="primary">Accept</Button>,
      //  <Button type="primary">Reject</Button>,
      //  <Button type="primary">Meetme</Button>,
      //  ]}
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <Descriptions.Item label="id">{x.key}</Descriptions.Item>
      {/* <Descriptions.Item label="company">{x.Company}</Descriptions.Item> */}
      <Descriptions.Item label="Department"> {x.Department}</Descriptions.Item>
      <Descriptions.Item label="Firstname">{x.Firstname}</Descriptions.Item>
      <Descriptions.Item label="Lastname">{x.Lastname}</Descriptions.Item>
      <Descriptions.Item label="LeaveReason">{x.LeaveReason}</Descriptions.Item>
      <Descriptions.Item label="LeaveType">{x.Leavetype}</Descriptions.Item>
      <Descriptions.Item label="Organization">{x.Organization}</Descriptions.Item>
      <Descriptions.Item label="RequestedLeave">{x.RequestedLeave}</Descriptions.Item>
      <Descriptions.Item label="email">{x.email}</Descriptions.Item>
      <Descriptions.Item label="phone">{x.phone}</Descriptions.Item>
      <Descriptions.Item label="status">{x.status}</Descriptions.Item>
      <Descriptions.Item label="from">{x.from}</Descriptions.Item>
      <Descriptions.Item label="to">{x.to}</Descriptions.Item>
      <Descriptions.Item label="comments">kc lsadkc </Descriptions.Item>


    </Descriptions>
    <div style = {{padding : 15}}>
      {/* <Button type="secondary">Accept</Button>
      <Button type="primary">Reject</Button>
      <Button type="primary">Meetme</Button> */}

      <Space>
      <Button type="primary">Accept</Button>
      <Button type="primary">Reject</Button>
      {/* <Button type="primary">Button</Button> */}

    </Space>


    </div>
    </div>
);
    }

}
export default CardDetails;




// const Demo = () => (
//   <div>

//   </div>
// );

// ReactDOM.render(<Demo />, mountNode);

// <Card
// style={{ width: 300 }}
// actions={[
//   <Button type="primary">Accept</Button>,
//   <Button type="primary">Reject</Button>,
//   <Button type="primary">Meetme</Button>,
// ]}
// >
// <Meta
//   title = {x.Firstname}
// />
// <p>key: {x.key}</p>
// <p>Company: {x.company}</p>
// <p>Department: {x.Department}</p>
// <p>Firstname: {x.Firstname}</p>
// <p>Lastname: {x.Lastname}</p>
// <p>LeaveReason: {x.LeaveReason}</p>
// <p>Leavetype: {x.Leavetype}</p>
// <p>Organization: {x.Organization}</p>
// <p>RequestedLeave: {x.RequestedLeave}</p>
// <p>email: {x.email}</p>
// <p>phone: {x.phone}</p>
// <p>status:{x.status}</p>
// <p>from : {x.from}</p>
// <p> to : {x.to}</p>
// </Card>

      //  <Descriptions.Item label="Config Info">
      //   Data disk type: MongoDB
      //   <br />
      //   Database version: 3.4
      //   <br />
      //   Package: dds.mongo.mid
      //   <br />
      //   Storage space: 10 GB
      //   <br />
      //   Replication factor: 3
      //   <br />
      //   Region: East China 1
      // </Descriptions.Item> 