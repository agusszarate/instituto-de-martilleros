"use client";

import React from "react";
import { Row, Col, Typography, Space } from "antd";

const { Title } = Typography;

const InscriptionFormSection: React.FC = () => {
  return (
    <Row
      gutter={[48, 48]}
      align="middle"
      justify="center"
      style={{
        background: "#4479d9",
        padding: "40px 20px",
        margin: 0,
      }}
    >
      <Col xs={24} md={18} lg={14} xl={12} style={{ textAlign: "center" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title
            level={2}
            className="inscriptions-title"
            style={{
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "24px",
              fontSize: "32px",
              fontWeight: 700,
              fontFamily: '"Montserrat", sans-serif',
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            INSCRIPCIONES
          </Title>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSda7Db4wnrTRt22STLRV0BXwOz4qBQg18yUl5D2Kpx4gMJCDA/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{
              border: "none",
              display: "block",
              borderRadius: "8px",
              background: "#ffffff",
            }}
          >
            Cargando…
          </iframe>
        </Space>
      </Col>
    </Row>
  );
};

export default InscriptionFormSection;
