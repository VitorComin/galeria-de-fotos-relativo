import { Layout } from "antd";
import "./App.css";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import ContentPage from "./pages/ContentPage";
import { useState } from "react";
import { IAddresses } from "./types/GeneralTypes";

const { Content } = Layout;

function App() {
  const [addressesList, setAddressesList] = useState<IAddresses[]>([]);

  return (
    <Layout style={{ height: "100vh" }}>
      <LayoutHeader setAddressesList={setAddressesList} />
      <Content className="layout-content">
        <ContentPage addressesList={addressesList} />
      </Content>
      <LayoutFooter />
    </Layout>
  );
}

export default App;
