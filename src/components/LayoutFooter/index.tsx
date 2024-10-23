import { Layout } from "antd";

const { Footer } = Layout;

const LayoutFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Vitor Comin ©{new Date().getFullYear()} Gerenciamento de Estado Relativo -
      Componentização Plana
    </Footer>
  );
};

export default LayoutFooter;
