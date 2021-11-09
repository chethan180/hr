import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import {getPosts} from '../actions/crud';
import {useSelector} from 'react-redux';
import { connect } from "react-redux";


// const post = [];


// import Left from './Left';
const { Column } = Table;
const form = {Emp_Id : 123};
// const data = [
//   {
//     key:"1",
//     Company: "hi",
//     Department: "cse",
//     Firstname: "chethan",
//     Lastname: "rao",
//     LeaveReason: "Health Issues",
//     Leavetype: "Paid",
//     Organization: "mahindra",
//     RequestedLeave: "2",
//     email: "chethanrao999@gmail.com",
//     phone: "9876434312",
//     status:"pending",
//     from : "2021-10-07 22:05:24",
//     to : "2021-10-08 22:05:30",    
//   },
//   {
//     key: '2',
//     Company: "hi",
//     Department: "cse",
//     Firstname: "chethan",
//     Lastname: "rao",
//     LeaveReason: "Health Issues",
//     Leavetype: "Paid",
//     Organization: "mahindra",
//     RequestedLeave: "2",
//     email: "chethanrao999@gmail.com",
//     phone: "9876434312",
//     status:"pending",
//     from : "2021-10-07 22:05:24",
//     to : "2021-10-08 22:05:30",
//   },
//   {
//     key: '3',
//     Company: "hi",
//     Department: "cse",
//     Firstname: "chethan",
//     Lastname: "rao",
//     LeaveReason: "Health Issues",
//     Leavetype: "Paid",
//     Organization: "mahindra",
//     RequestedLeave: "2",
//     email: "chethanrao999@gmail.com",
//     phone: "9876434312",
//     status:"pending",
//     from : "2021-10-07 22:05:24",
//     to : "2021-10-08 22:05:30",
//   },
// ];

const Leave= () =>
{
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("hi");
    dispatch(getPosts(form));
  } ,[dispatch]);

  const post = useSelector((state) => state.crud.data);
  console.log(post);
  // post.push(posts);
  useEffect(() => {
    // console.log(post);
    if(post){
      // console.log(post);
      // const q = post;
      setPosts(post);
      // console.log(posts);
      setLoading(true);
    }
  });
  // console.log(posts);

  if(loading){
    // // console.log(posts.is_Approved);
    // if(posts.is_Approved === ""){
    //   console.log("bkdsjnj");
    //   post[0] = {...post[0] , "is_Approved" : "pending"};
    // }
    return(
      <Table dataSource={posts} responsive = "md">
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
  );
  }
  else {
    return(
      <div>
        wait
      </div>
    )
  }

};

// const mapStateToProps = (state) => {
//   console.log("state", state);
//   // const post = state;
//   // const usersWithFoo = state.filter((user) =>
//   //   user.includes(ownProps.searchText)
//   // );
//   return {
//     post: state.crud.data
//     // usersWithFoo,
//   };
// };

export default (Leave);


