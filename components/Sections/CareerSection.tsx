"use client";

import React from "react";
import { Row, Col, Typography, Button, Space, Grid } from "antd";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const CareerSection: React.FC = () => {
  const screens = useBreakpoint();

  const containerPadding = screens.lg
    ? "60px 50px"
    : screens.md
    ? "50px 40px"
    : "40px 20px";
  const titleSize = screens.lg ? 48 : screens.sm ? 36 : 28;
  const textSize = screens.lg ? 19.2 : screens.sm ? 17 : 16;
  const buttonSize = screens.lg ? "large" : "middle";
  const buttonBlock = !screens.sm;

  return (
    <div style={{ background: "#ffffff", padding: containerPadding }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={14}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Title
                level={2}
                style={{
                  color: "#4479d9",
                  fontSize: `${titleSize}px`,
                  marginBottom: screens.lg ? "24px" : "16px",
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
                  fontSize: `${textSize}px`,
                  color: "#232323",
                  lineHeight: 1.5,
                  marginBottom: screens.lg ? "32px" : "24px",
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Somos la única institución en La Plata que depende del Colegio
                de Martilleros y otorga Título Universitario articulado con la
                Universidad Nacional de La Plata (UNLP).
              </Paragraph>
              <Button
                type="primary"
                size={buttonSize}
                block={buttonBlock}
                href="/ISFT-CARRERA.pdf"
                target="_blank"
                style={{
                  minWidth: buttonBlock ? undefined : "280px",
                  height: "48px",
                  fontSize: screens.lg ? "16px" : screens.sm ? "15px" : "14px",
                  fontWeight: 600,
                  fontFamily: '"Montserrat", sans-serif',
                  background: "#ff4d00",
                  borderColor: "#ff4d00",
                  color: "#ffffff",
                  borderRadius: "4px",
                  boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#a83300";
                  e.currentTarget.style.borderColor = "#a83300";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ff4d00";
                  e.currentTarget.style.borderColor = "#ff4d00";
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
