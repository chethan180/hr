import React ,{useState ,useEffect} from "react";
import {BrowserRouter as Router } from "react-router-dom";
// import CardDetail from "./CardDetail";
import Approval from "./Approval";
import CardDetails from "./CardDetail";
import { useDispatch } from 'react-redux';
import {getHodPosts} from '../actions/crud';
import {useSelector} from 'react-redux';

const data = [
    {
      key:"1",
      Company: "hi",
      Department: "cse",
      Firstname: "chethan",
      Lastname: "rao",
      LeaveReason: "Health Issues",
      Leavetype: "Paid",
      Organization: "mahindra",
      RequestedLeave: "2",
      email: "chethanrao999@gmail.com",
      phone: "9876434312",
      status:"pending",
      from : "2021-10-07 22:05:24",
      to : "2021-10-08 22:05:30",    
    },
    {
      key: '2',
      Company: "hi",
      Department: "cse",
      Firstname: "rohan",
      Lastname: "rao",
      LeaveReason: "Health Issues",
      Leavetype: "Paid",
      Organization: "mahindra",
      RequestedLeave: "2",
      email: "chethanrao999@gmail.com",
      phone: "9876434312",
      status:"pending",
      from : "2021-10-07 22:05:24",
      to : "2021-10-08 22:05:30",
    },
    {
      key: '3',
      Company: "hi",
      Department: "cse",
      Firstname: "yu",
      Lastname: "rao",
      LeaveReason: "Health Issues",
      Leavetype: "Paid",
      Organization: "mahindra",
      RequestedLeave: "2",
      email: "chethanrao999@gmail.com",
      phone: "9876434312",
      status:"pending",
      from : "2021-10-07 22:05:24",
      to : "2021-10-08 22:05:30",
    },
  ];

  const form = {Emp_Id : 123};

const Mix =() => {
    const [ids , setids] = useState('');
    

    const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hi");
    dispatch(getHodPosts(form));
  } ,[dispatch]);
  //   dispatch(getHodPosts(form));

  const post = useSelector((state) => state.crud.data);
  console.log(post);

  useEffect(() => {
    if(post){
      setPosts(post);
      setLoading(true);
      // post = [];
    }
  },[post]);

  console.log(posts.result);

    const handchange = (value) => {
        setids(value);
    }



    if(loading){
      let x;
      // console.log(ids);
      for(let val of posts.result )
      {
          if(val.Emp_Id === ids)
          {
               x = val;
          }    
      }
      return(
        <Router>
            <main>
                <CardDetails data = {x} host = {post} val = {ids}/>
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