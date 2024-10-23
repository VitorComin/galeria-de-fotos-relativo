import { Col, List, Space, Typography } from "antd";
import { IAddresses } from "../../types/GeneralTypes";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const ContentPage: React.FC = () => {
  const { addressesList } = useContext(GeneralContext);

  return (
    <Space className="layout-content-container">
      {addressesList?.length > 0 ? (
        <List
          size="large"
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
      ) : (
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
      )}
    </Space>
  );
};

export default ContentPage;
