import { Layout, Menu } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router';
import {BrowserRouter as Router ,Route } from "react-router-dom";
import Forms from './Forms';
import Default from './Default';
// import { useHistory } from 'react-router';
import React, { useEffect, useState } from "react";
// import Leave from './Leave';
// import Left from './Left';
import Status from './Status';
// import { useDispatch } from 'react-redux';
// import {getPosts} from '../actions/crud';
import HRMAIN from './hrmain';

const { Content, Footer, Sider } = Layout;



const Homeh = () => {

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {

    setCollapsed (!collapsed);
  };
  // const history = useHistory();
  // useEffect(() => {
  //   // const listener = e => {
  //   //   e.preventDefault()
  //   // history.push("/");
  //   // // history.replace(redirectPath);
  //   // }
  // },[]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // } ,[dispatch]);

    return (
      <Router>
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="side" />
        <Menu theme="dark" mode="inline"   >
          <Menu.Item key="1" icon={<UserOutlined />}>
            View Status 
            <Link to="/hr/status" />
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Apply leave
            <Link to = "/hr/form"/>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            View Employee Details
            <Link to = "/hr/hr"/>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            SOP's
            <Link to = "/hr/default"/>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            
          </div> */}
          <Route path = "/hr/form" exact component = {Forms}/> 
          <Route path = "/hr/default" exact component = {Default}/>
          <Route path = "/hr/hr" exact component = {HRMAIN}/>
          <Route path = "/hr/status" exact component = {Status}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Mahindra University</Footer>
      </Layout>
    </Layout>
      </Router>

    );
}


export default Homeh;




// defaultSelectedKeys={['1']}
