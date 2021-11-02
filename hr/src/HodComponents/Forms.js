import React from 'react';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import { DatePicker } from 'antd';
// import ReactDOM from 'react-dom';
// import {   TimePicker } from 'antd';
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
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // const rangeTimeValue = values['range-time-picker'];
    const rangeTimeValue = values['range-time-picker'];
    const Values = {
      ...values,
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ]
    }
    console.log('Received values of form: ', Values);
  };

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
        prefix: '86',
      }}
      scrollToFirstError
    >

    <Form.Item
        name="Company"
        label="Company"
        rules={[
          {
            required: true,
            message: 'Please input your Company name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
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
      </Form.Item>

      <Form.Item
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
      </Form.Item>

      <Form.Item
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
      </Form.Item>

      <Form.Item
        name="Organization"
        label="Organization"
        rules={[
          {
            required: true,
            message: 'Please input your Organization name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
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
      </Form.Item>

      <Form.Item
        name="Leavetype"
        label="Leave Type"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="Leave Type">
          <Option value="Paid">Paid</Option>
          <Option value="UnPaid">UnPaid</Option>
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



      <Form.Item
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
      </Form.Item>

      <Form.Item name={['user', 'introduction']} label="Remarks">
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



