import React ,{ useContext, useEffect, useRef, useState } from "react";
import {BrowserRouter as Router } from "react-router-dom";
// import CardDetail from "./CardDetail";
import Approval from "./Approval";
import CardDetails from "./CardDetail";
import { useDispatch } from 'react-redux';
import {getHodPosts } from '../actions/crud';
import {useSelector} from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';
import { io } from "socket.io-client";

  // const form = {Emp_Id : 123};

const Mix =() => {
    const [ids , setids] = useState('');
    const [apptime , setapptime] = useState('');
    const socket = useRef();

  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const form = {Emp_Id :user?.result.Emp_Id};


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };
  useEffect(() => {
    // console.log(user?.result.Emp_Id);
    // console.log(Date.now());
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));

        //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const post = useSelector((state) => state?.hod.data);
  console.log(post);

  useEffect(() => {
    socket.current = io("ws://192.168.43.161:3001");
    console.log(socket);
    socket.current.on("getMessage", (data) => {
      console.log(data);
      console.log(posts);
      if(post){
        console.log(post);
        post.push(data.text);
        setPosts(post);
      }
      // posts.push(data.text);
      // setPosts(post);
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user?.result.Emp_Id);
  }, [user]);

  useEffect(() => {
    console.log("hi");
    if(form){
      dispatch(getHodPosts(form));
    }
  } ,[dispatch]);
  //   dispatch(getHodPosts(form));



  useEffect(() => {
    setPosts([]);
      setids('');
      setapptime('');
    if(post){
      setPosts(post);
      setLoading(true);
      // post = [];
    }
  },[post]);

  console.log(posts.result);

    const handchange = (value2,value3) => {
        console.log(value2);
        console.log(value3);
        setids(value2);
        setapptime(value3);
    }
  //   const handchangedate = (value1) => {
  //     console.log(value1);
  //     setapptime(value1);
  // }


    if(loading){
      let x;
      // console.log(ids);
      for(let val of posts.result )
      {
          if(val.Emp_Id === ids && val.Leave_Applied_Date === apptime)
          {
               x = val;
          }    
      }
      return(
        <Router>
            <main>
                <CardDetails data = {x} host = {post} val2 = {ids} val1 = {apptime}/>
                <Approval data = {posts.result} change={handchange} />  
            </main>
        </Router>
    );
    }
    else {
      return(
        <div>
          wait
        </div>
      )
    }


}
export default Mix;




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
//     Firstname: "rohan",
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
//     Firstname: "yu",
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