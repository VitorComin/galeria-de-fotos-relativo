import { Layout } from "antd";
import "./App.css";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import ContentPage from "./pages/ContentPage";
import { GeneralProvider } from "./contexts/GeneralContext";

const { Content } = Layout;

function App() {
  return (
    <GeneralProvider>
      <Layout style={{ height: "100vh" }}>
        <LayoutHeader />
        <Content className="layout-content">
          <ContentPage />
        </Content>
        <LayoutFooter />
      </Layout>
    </GeneralProvider>
  );
}

export default App;
