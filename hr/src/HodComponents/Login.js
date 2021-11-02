
import React from 'react';
// import ReactDOM, { render } from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import  { PageContainer } from '@ant-design/pro-layout';

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      {/* <LockOutlined className = "lock"/> */}
          <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Login
// ReactDOM.render(<NormalLoginForm />, document.getElementById('container'));






