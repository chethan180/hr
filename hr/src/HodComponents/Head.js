import { PageHeader, Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import './headindex.css';
const { Header } = Layout;

const Head =() =>{
    return(
      <Layout>
        <Header style={{  zIndex: 1, width: '100%', background: '#fff' }}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="5">
          <Button type="Logout">
            Logout
          </Button>
          </Menu.Item>
        </Menu>
        </Header>
      </Layout>
    )
}

export default Head;

{/* <Button key="3">Operation</Button>,
<Button key="2">Operation</Button>, */}

{/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
<div className="logo" />
<Menu
  theme="light"
  mode="horizontal"
  defaultSelectedKeys={['2']}
  style={{ lineHeight: '64px' }}
>
  <Menu.Item key="1">nav 1</Menu.Item>
  <Menu.Item key="2">nav 2</Menu.Item>
  <Menu.Item key="3">nav 3</Menu.Item>
</Menu>
</Header> */}


{/* <PageHeader
className="site-page-header"
title = "Mahindra University"
style={{backgroundColor: "White"}}
extra={[
  <Button key="1" type="Logout">
    Logout
  </Button>,
]}
/> */}
