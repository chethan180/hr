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
    const rangeTimeValue = values['range-time-picker'];
    Values = {
      ...values,
      'Emp_Id' : user?.result.Emp_Id,
      'Leave_Applied_Date': new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today),
      'From' : rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      'To':rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')
    }
    socket.current.emit("sendMessage", {
      senderId: user?.result.Emp_Id,
      receiverId : "123",
      text: Values,
    });

    dispatch(apply(Values));
    console.log('Received values of form: ', Values);
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

    {/* <Form.Item
        name="Emp_Id"
        label="Employee Id"
        rules={[
          {
            required: true,
            message: 'Please input your Employee Id name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}

      {/* <Form.Item
        name="Firstname"
        label="First name"
        rules={[
          {
            required: true,
            message: 'Please input your Firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Lastname"
        label="Lastname"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item> */}

      {/* <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item> */}

      {/* <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item> */}

      {/* <Form.Item
        name="Leave_Applied_Date"
        label="Leave_Applied_Date"
        rules={[
          {
            required: true,
            message: 'Please input your Leave_Applied_Date !',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}

      {/* <Form.Item
        name="Department"
        label="Department"
        rules={[
          {
            required: true,
            message: 'Please input your Department name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}

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
        message: 'Please select time!',
      },
      ]}
       >
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

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



