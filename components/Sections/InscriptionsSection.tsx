"use client";

import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";

const { Title, Paragraph } = Typography;

const InscriptionsSection: React.FC = () => {
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
      <Col xs={24} md={20} lg={16} xl={12} style={{ textAlign: "center" }}>
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
            ABIERTAS LAS INSCRIPCIONES
          </Title>
          <Paragraph
            className="inscriptions-text"
            style={{
              fontSize: "16px",
              color: "#fafafa",
              lineHeight: 1.5,
              textAlign: "center",
              marginBottom: "32px",
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Podés descarte el PDF que contiene todo el material que necesitas
            para la inscripción: Plan de estudios, horarios de cursada,
            condiciones de ingreso e inscripción y datos de contacto.
          </Paragraph>
          <Button
            size="large"
            className="inscriptions-button"
            href="/ISFT-CARRERA.pdf"
            target="_blank"
            style={{
              height: "48px",
              fontSize: "14px",
              fontWeight: 600,
              paddingLeft: "24px",
              paddingRight: "24px",
              background: "#fafafa",
              borderColor: "#fafafa",
              color: "#7a7a7a",
              borderRadius: "4px",
              boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              fontFamily: '"Montserrat", sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#cfcfcf";
              e.currentTarget.style.borderColor = "#cfcfcf";
              e.currentTarget.style.color = "#4f4f4f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fafafa";
              e.currentTarget.style.borderColor = "#fafafa";
              e.currentTarget.style.color = "#7a7a7a";
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
