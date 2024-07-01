import { Layout, Menu } from 'antd';
import React from 'react';

const { Header } = Layout;

// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items1 = ['로고', '메뉴'].map((key) => ({
//   key,
//   label: key,
// }));

const items = [
  {
    key: 'Home',
    label: (<a href='/movie'> Home </a>)
  },
]

const NavBar = () => {

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};

export default NavBar;