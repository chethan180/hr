import React, { useEffect,useRef,useState } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Result,
} from 'antd';
import { DatePicker } from 'antd';
// import ReactDOM from 'react-dom';
// import {   TimePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {apply} from '../actions/crud';
import {useSelector} from 'react-redux';
import PickerButton from 'antd/lib/date-picker/PickerButton';
import {io} from 'socket.io-client';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';

const { RangePicker } = DatePicker;



const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};




const Forms = () => {
  
  const socket = useRef();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();
  const today = Date.now();
  // const [socket,setSocket] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };
  useEffect(() => {
    // console.log(user?.result.Emp_Id);
    // console.log(Date.now());

console.log();
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
        //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.current = io("ws://192.168.43.161:3001");
    console.log(socket);
  }, []);
  useEffect(() => {
    socket.current.emit("addUser", user?.result.Emp_Id);
  }, [user]);
  var Values;

  const post = useSelector((state) => state.crud.data);
  console.log(post);

  const onFinish = (values) => {
    // const start = '2010-01-25';
    // const end = '2010-01-20';
    // var diff =  Math.floor(( Date.parse(end) - Date.parse(start) ) / 86400000);

    // console.log("hi", diff);
    // // const days_between = Math.ceil(Math.abs(end - start) / 86400);
    // // var Difference_In_Time = values.To.getTime() - values.From.getTime()
    // // console.log( Difference_In_Time);

    const rangeTimeValue = values['range-time-picker'];
    Values = {
      ...values,
      'Emp_Id' : user?.result.Emp_Id,
      'Leave_Applied_Date': new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today),
      // "Date_Of_Issue" : values['Date_Of_Issue'].format('YYYY-MM-DD'),
      'From' : rangeTimeValue[0].format('YYYY-MM-DD'),
      'To':rangeTimeValue[1].format('YYYY-MM-DD')
    }
    socket.current.emit("sendMessage", {
      senderId: user?.result.Emp_Id,
      receiverId : "123",
      text: Values,
    });

    dispatch(apply(Values));
    console.log('Received values of form: ', Values);
    // form.resetFields();
  };

  // useEffect(() => {
  //   dispatch(apply(Values));
  // } ,[dispatch]);


  // useEffect(() => {
  //   if (Values) apply(Values);
  // }, [Values]);






  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );


  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      // name="nest-messages"
      onFinish={onFinish}
      initialValues={{
        prefix: '91',
      }}
      scrollToFirstError
    >

      <Form.Item
        name="Leave_Category"
        label="Leave Type"
        rules={[
          {
            required: true,
            message: 'Please select LeaveCategory!',
          },
        ]}
      >
        <Select placeholder="Leave Type">
          <Option value="CL">CL</Option>
          <Option value="EL">EL</Option>
          <Option value="ML">ML</Option>
          <Option value="COMP_OF">COMP_OF</Option>
        </Select>
      </Form.Item>

      <Form.Item name="range-time-picker" label="RangePicker[showTime]" 
        rules= {[
      {
        type: 'array',
        required: true,
        message: 'Please select Date!',
      },
      ]}
       >
        <RangePicker  format="YYYY-MM-DD" />
      </Form.Item>
        {/* <Form.Item 
        name = "Date_Of_Issue" 
        label="DatePicker"
        rules= {[
          {
            type: 'array',
            required: true,
            message: 'Please select time!',
          },
          ]}
          >
          <DatePicker/>
        </Form.Item> */}

      <Form.Item
        name="RequestedLeave"
        label="RequestedLeave"
        rules={[
          {
            required: true,
            message: 'Please input your RequestedLeave ',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>



      {/* <Form.Item
        name="LeaveReason"
        label="Leave Reason"
        rules={[
          {
            required: true,
            message: 'Please select reason!',
          },
        ]}
      >
        <Select placeholder="Leave Reason">
          <Option value="Health Issues">Health Issues</Option>
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
        </Select>
      </Form.Item> */}

      <Form.Item name= "Remarks" label="Remarks">
        <Input.TextArea />
      </Form.Item>


      

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Apply
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Forms;



