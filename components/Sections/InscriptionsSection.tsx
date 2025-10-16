"use client";

import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const InscriptionsSection: React.FC = () => {
  return (
    <Row
      gutter={[48, 48]}
      align="middle"
      justify="center"
      style={{
        background:
          "linear-gradient(135deg, rgba(20, 157, 204, 0.9) 0%, rgba(41, 98, 137, 0.9) 100%)",
        padding: "60px 50px",
        margin: 0,
      }}
    >
      <Col xs={24} md={16} lg={12} style={{ textAlign: "center" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title
            level={2}
            style={{
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "32px",
              fontSize: "48px",
              fontWeight: 700,
              fontFamily: '"Montserrat", sans-serif',
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            ABIERTAS LAS INSCRIPCIONES 2023
          </Title>
          <Paragraph
            style={{
              fontSize: "19.2px",
              color: "#ffffff",
              lineHeight: 1.5,
              textAlign: "center",
              marginBottom: "48px",
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Podés descarte el PDF que contiene todo el material que necesitas
            para la inscripción: Plan de estudios, horarios de cursada,
            condiciones de ingreso e inscripción y datos de contacto.
          </Paragraph>
          <Button
            size="large"
            icon={<DownloadOutlined />}
            href="https://isftmartilleroslp.edu.ar/assets/files/ISFT-CARRERA2023.pdf"
            target="_blank"
            style={{
              height: "48px",
              fontSize: "16px",
              fontWeight: 400,
              paddingLeft: "32px",
              paddingRight: "32px",
              background: "#fafafa",
              borderColor: "#fafafa",
              color: "#7a7a7a",
              borderRadius: 0,
            }}
          >
            DESCARGAR PDF CON INFORMACIÓN
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default InscriptionsSection;
