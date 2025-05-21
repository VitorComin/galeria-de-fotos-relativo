import { Card, Col, List, Space, Typography } from "antd";
import { IAddresses } from "../../types/GeneralTypes";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const ContentPage: React.FC = () => {
  const { addressesList } = useContext(GeneralContext);
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space className="layout-content-container">
      <Card style={{ marginBottom: 10 }}>
        <Typography.Paragraph>
          Escolha uma opção de tamanho de objeto.
          <br />
          <br />
          O objetivo é ver a performance da aplicação usando a componentização
          plana com gerenciamento de estado global.
          <br />
          <br />
          Os resultados serão usados para o MVP do meu TCC.
        </Typography.Paragraph>
      </Card>
      <List
        size="large"
        style={{ borderColor: "#f0f0f0" }}
        header={
          <Typography.Text
            strong
          >{`Lista de Endereços (${addressesList?.length})`}</Typography.Text>
        }
        bordered
        dataSource={addressesList}
        renderItem={(address: IAddresses) => (
          <List.Item>
            <Col span={14}>
              <Typography.Text>
                <strong>Rua:</strong> {address?.street}
              </Typography.Text>
              <Typography.Text>
                <strong>Cidade:</strong> {address?.city}
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Text>
                <strong>Estado:</strong> {address?.state}
              </Typography.Text>
              <Typography.Text>
                <strong>CEP:</strong> {address?.zipCode}
              </Typography.Text>
            </Col>
          </List.Item>
        )}
      />
    </Space>
  );
};

export default ContentPage;
