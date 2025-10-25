"use client";

import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";

const { Title, Paragraph } = Typography;

const CareerSection: React.FC = () => {
  return (
    <div style={{ background: "#ffffff", padding: "60px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={14}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Title
                level={2}
                style={{
                  color: "#4479d9",
                  marginBottom: "24px",
                  fontSize: "48px",
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
                  fontSize: "19.2px",
                  color: "#232323",
                  lineHeight: 1.5,
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
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#inscripciones");
                  if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                style={{
                  width: "274px",
                  height: "48px",
                  fontSize: "16px",
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
