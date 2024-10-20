import { Layout, Space } from 'antd';
import './App.css';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{height: '100vh'}}>
      <LayoutHeader />
      <Content className='layout-content'>
        <Space className='layout-content-container'>
          <Outlet />
        </Space>
      </Content>
      <LayoutFooter />
    </Layout>
  );
}

export default App;
