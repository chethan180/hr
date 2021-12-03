import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table} from 'antd';

import { useDispatch } from 'react-redux';
import {balance} from '../actions/crud';
import {useSelector} from 'react-redux';
import { connect } from "react-redux";


const { Column } = Table;


const Left = ({post}) => {
    const xdata = [];
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const dispatch = useDispatch();
  
    const form = {Emp_Id :user?.result.Emp_Id};
  
  
  
    // const post = useSelector((state) => state.crud.data);
    // console.log(post);
  
    useEffect(() => {
      // console.log("hi");
      setLoading(false);
      if(form.Emp_Id){
        dispatch(balance(form));
      }
    } ,[dispatch ]);

    useEffect(() => {
        // console.log(post);
        if(post){
          // console.log(post);
          // const q = post;
          console.log(post);
          xdata.push(post);
          setPosts(xdata);
          console.log(xdata);

          // console.log(posts);
          setLoading(true);
        }
      } , [post]);

      return(
        // <Table dataSource={data} responsive = "xs">
        //     <Column title="LeaveType" dataIndex="LeaveType" key="LeaveType" />
        //     <Column title="Opening" dataIndex="Opening" key="Opening" />
        //     <Column title="CurrentEntitlement" dataIndex="CurrentEntitlement" key="CurrentEntitlement" />
        //     <Column title="LeavesAvailed" dataIndex="LeavesAvailed" key="LeavesAvailed" />
        //     <Column title="Lapsed" dataIndex="Lapsed" key="Lapsed" />
        //     <Column title="LeaveEncashed" dataIndex="LeaveEncashed" key="LeaveEncashed" />
        //     <Column title="ClosingBalance" dataIndex="ClosingBalance" key="ClosingBalance" />
        // </Table>
        <Table dataSource={posts} responsive = "md">
        <Column title="CL" dataIndex="CL" key="CL" />
        <Column title="ML" dataIndex="ML" key="ML" />
        <Column title="EL" dataIndex="EL" key="EL" />
        <Column title="COMP_OF" dataIndex="COMP_OF" key="COMP_OF" />
        <Column title="Year" dataIndex="Year" key="Year" />

        </Table> 

    );
}

const mapStateToProps = (state) => {
    console.log("state", state);
    // const post = state;
    // const usersWithFoo = state.filter((user) =>
    //   user.includes(ownProps.searchText)
    // );
    return {
      post: state.balance.data
      // usersWithFoo,
    };
  };
  
  export default connect(mapStateToProps)(Left);


//   const data = [
//     {
//         LeaveType:"Casual",
//         Opening : "1",
//         CurrentEntitlement : "3",
//         LeavesAvailed : "1",
//         Lapsed : "1",
//         LeaveEncashed : "1",
//         ClosingBalance : "1",
//     },
//     {
//         LeaveType:"Casual",
//         Opening : "1",
//         CurrentEntitlement : "3",
//         LeavesAvailed : "1",
//         Lapsed : "1",
//         LeaveEncashed : "1",
//         ClosingBalance : "1",
//     },
//     {
//         LeaveType:"Casual",
//         Opening : "1",
//         CurrentEntitlement : "3",
//         LeavesAvailed : "1",
//         Lapsed : "1",
//         LeaveEncashed : "1",
//         ClosingBalance : "1",
//     },
//     ];