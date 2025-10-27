"use client";

import React from "react";
import { Row, Col, Typography, Space } from "antd";

const { Title } = Typography;

const InscriptionFormSection: React.FC = () => {
  return (
    <div style={{ background: "#f8f9fa", padding: "60px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row justify="center">
          <Col xs={24} md={18} lg={14} xl={12}>
            <Space
              direction="vertical"
              size="large"
              style={{ width: "100%", textAlign: "center" }}
            >
              <Title
                level={2}
                style={{
                  color: "#4479d9",
                  textAlign: "center",
                  marginBottom: "48px",
                  fontSize: "48px",
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
      </div>
    </div>
  );
};

export default InscriptionFormSection;
