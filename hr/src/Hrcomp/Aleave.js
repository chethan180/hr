import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import {aleave} from '../actions/crud';
import {useSelector} from 'react-redux';
import { connect } from "react-redux";


// const post = [];


// import Left from './Left';
const { Column } = Table;
// const form = {Emp_Id : 123};


const Leave= ({post}) =>
{
    console.log(post)
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
      dispatch(aleave(form));
    }
  } ,[dispatch ]);

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
    <Column title="Company" dataIndex="Company" key="Company" /> */}
      <Column title="Emp_Id" dataIndex="Emp_Id" key="Emp_Id" /> 
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

const mapStateToProps = (state) => {
  console.log("state", state);
  // const post = state;
  // const usersWithFoo = state.filter((user) =>
  //   user.includes(ownProps.searchText)
  // );
  return {
    post: state.aleav.data
    // usersWithFoo,
  };
};

export default connect(mapStateToProps)(Leave);

