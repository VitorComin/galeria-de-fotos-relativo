import { Space, Typography } from "antd";
import { IContentPage } from "../../types/GeneralTypes";

const ContentPage: React.FC<IContentPage> = ({ addressesList }) => {
  return (
    <Space className="layout-content-container">
      <Typography.Text>{JSON.stringify(addressesList)}</Typography.Text>
    </Space>
  );
};

export default ContentPage;
