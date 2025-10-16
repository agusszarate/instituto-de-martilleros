"use client";

import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const CareerSection: React.FC = () => {
  return (
    <div style={{ background: "#ffffff", padding: "100px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={14}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Title
                level={2}
                style={{
                  color: "#232323",
                  marginBottom: "24px",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 700,
                  fontFamily: '"Montserrat", sans-serif',
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                CARRERA DE MARTILLERO PÚBLICO Y CORREDOR
              </Title>
              <Paragraph
                style={{
                  fontSize: "18px",
                  color: "#232323",
                  lineHeight: "1.7",
                  marginBottom: "32px",
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Somos la única institución en La Plata que depende del Colegio
                de Martilleros y otorga Título Universitario articulado con la
                Universidad Nacional de La Plata (UNLP).
              </Paragraph>
              <Button
                size="large"
                icon={<RightOutlined />}
                iconPosition="end"
                href="#inscripciones"
                style={{
                  height: "48px",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: '"Montserrat", sans-serif',
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  background: "#ff4f38",
                  borderColor: "#ff4f38",
                  color: "#ffffff",
                  borderRadius: 0,
                }}
              >
                Información sobre la carrera
              </Button>
            </Space>
          </Col>

          <Col xs={24} lg={10}>
            <img
              src="/images/ijj.jpg"
              alt="Carrera de Martillero"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CareerSection;
