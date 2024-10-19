import { Layout, Space, Typography } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{height: '100vh'}}>
      <Header className='layout-header'>
        <Space>
          <Typography.Title style={{ color: 'white' }}>Galeria de Fotos</Typography.Title>
        </Space>
      </Header>
      <Content className='layout-content'>
        <Space className='layout-content-container'>
            Em andamento...
        </Space>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
