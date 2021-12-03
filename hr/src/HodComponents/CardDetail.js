import { Descriptions,Button,Space } from 'antd';
import { useDispatch } from 'react-redux';
import {approve} from '../actions/crud';
import { useHistory } from 'react-router-dom';
import {apply} from '../actions/crud';
import {getHodPosts} from '../actions/crud';

import {useSelector} from 'react-redux';

// const y = {Emp_Id: "" , Request_Id : "",Type: "" , num: "",response: ""};

  const CardDetails = (props)=>{
    // console.log(post3);
    const dispatch = useDispatch();
    const history = useHistory();

    const post = useSelector((state) => state.updt);

    console.log(post);


    if(props.data === ""){
      return(
        <div>
          
        </div>
      );
    }
    else {
      console.log(props);
      const x =  props.host; 
      const y = {Emp_Id: x.Approver_Id , Request_Id : x.Emp_Id,Type: x.Leave_Category , num: "1",response: "",From : x.From,To:x.To,Leave_Applied_Date: x.Leave_Applied_Date};
  
      const handleSubmit1 = (e) => {
        e.preventDefault()
        const xy = {...y,response:"true"};
        dispatch(approve(xy , history));
      }
      const handleSubmit2 = (e) => {
        e.preventDefault()
        const xy = {...y,response:"false"};
        console.log(xy);
        dispatch(approve(xy , history));
      }

      // const post3 = useSelector((state) => state.crud.data2);
  
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
      <Descriptions.Item label="id">{x.Emp_Id}</Descriptions.Item>
      {/* <Descriptions.Item label="company">{x.Company}</Descriptions.Item> */}
      <Descriptions.Item label="Department"> {x.Department}</Descriptions.Item>
      <Descriptions.Item label="Staff_Name">{x.Staff_Name}</Descriptions.Item>
      {/* <Descriptions.Item label="Lastname">{x.Lastname}</Descriptions.Item> */}
      <Descriptions.Item label="Leave_Category">{x.Leave_Category}</Descriptions.Item>
      <Descriptions.Item label="Leave_Applied_Date">{x.Leave_Applied_Date}</Descriptions.Item>
      <Descriptions.Item label="Organization">{x.Organization}</Descriptions.Item>
      <Descriptions.Item label="RequestedLeave">{x.RequestedLeave}</Descriptions.Item>
      <Descriptions.Item label="email">{x.email}</Descriptions.Item>
      <Descriptions.Item label="phone">{x.phone}</Descriptions.Item>
      <Descriptions.Item label="status">{x.status}</Descriptions.Item>
      <Descriptions.Item label="from">{x.From}</Descriptions.Item>
      <Descriptions.Item label="to">{x.To}</Descriptions.Item>
      <Descriptions.Item label="comments">{x.Remarks} </Descriptions.Item>


    </Descriptions>
    <div style = {{padding : 15}}>
      {/* <Button type="secondary">Accept</Button>
      <Button type="primary">Reject</Button>
      <Button type="primary">Meetme</Button> */}

      <Space>
      <Button type="primary" onClick = {handleSubmit1}>Accept</Button>
      <Button type="primary" onClick = {handleSubmit2}>Reject</Button>
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