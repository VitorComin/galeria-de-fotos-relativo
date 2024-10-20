import { Layout, Menu, Space, Typography } from "antd";
import { menuItems } from "../../constants/menuItens";
import { Link } from "react-router-dom";

const { Header } = Layout;

const LayoutHeader: React.FC = () => {
  return (
    <Header className='layout-header'>
      <Space>
        <Typography.Title style={{ color: 'white' }}>Galeria de Fotos</Typography.Title>
      </Space>
      <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          className="header-menu"
        >
          {menuItems?.map(item => (
              <Menu.Item
                key={item?.key}
                title={item?.label}          
              >
                <Link to={item?.key}>
                  <Typography.Link>{item?.label}</Typography.Link> 
                </Link>
              </Menu.Item>
          ))}
      </Menu>
    </Header>
  )
}

export default LayoutHeader