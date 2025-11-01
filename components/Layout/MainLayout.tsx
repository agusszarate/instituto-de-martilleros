"use client";

import React from "react";
import { Layout as AntLayout, Row, Col, Menu, Typography, Space } from "antd";

const { Header: AntHeader, Content, Footer: AntFooter } = AntLayout;
const { Title, Text, Paragraph } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const menuItems = [
    { key: "nosotros", label: "NOSOTROS", href: "#nosotros" },
    { key: "carrera", label: "LA CARRERA", href: "#carrera" },
    { key: "inscripciones", label: "INSCRIPCIONES", href: "#contacto" },
  ];

  return (
    <AntLayout style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* Header */}
      <AntHeader
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "#ffffff",
          padding: "0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          borderBottom: "1px solid #efefef",
          height: "100px",
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ height: "100%", padding: "0 20px" }}
        >
          <Col xs={24} sm={24} md={12} lg={7}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/logo-instituto-5.png"
                alt="ISFT"
                style={{
                  height: "70px",
                  width: "auto",
                  flexShrink: 0,
                }}
              />
              <Title
                level={5}
                style={{
                  color: "#353535",
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: '"Open Sans", sans-serif',
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                  whiteSpace: "nowrap",
                  display: "none",
                }}
              >
                INSTITUTO SUPERIOR DE FORMACIÓN TÉCNICA
              </Title>
            </a>
          </Col>
          {/* Desktop Menu */}
          <Col xs={0} md={12} lg={17}>
            <Menu
              mode="horizontal"
              items={menuItems.map((item) => ({
                key: item.key,
                label: (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    style={{
                      color: "#232323",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: "16px",
                    }}
                  >
                    {item.label}
                  </a>
                ),
              }))}
              style={{
                background: "transparent",
                borderBottom: "none",
                justifyContent: "flex-end",
                lineHeight: "100px",
              }}
            />
          </Col>
        </Row>
      </AntHeader>

      {/* Content */}
      <Content style={{ marginTop: "100px" }}>{children}</Content>

      {/* Footer */}
      <AntFooter style={{ background: "#4479d9" }}>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={24} md={20} lg={18} xl={16}>
            <Row gutter={[32, 32]}>
              <Col xs={24} sm={12} md={8}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={5}
                    style={{
                      color: "#ffffff",
                      marginBottom: "12px",
                      fontWeight: 700,
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "19.2px",
                    }}
                  >
                    Dirección
                  </Title>
                  <Paragraph
                    style={{
                      color: "#ffffff",
                      marginBottom: 0,
                      fontSize: "13px",
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    Avenida 1 N° 671 e/ 45 y 46
                    <br />
                    La Plata, Buenos Aires
                  </Paragraph>
                </Space>
              </Col>

              <Col xs={24} sm={12} md={8}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={5}
                    style={{
                      color: "#ffffff",
                      marginBottom: "12px",
                      fontWeight: 700,
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "19.2px",
                    }}
                  >
                    Contacto
                  </Title>
                  <Paragraph
                    style={{
                      color: "#ffffff",
                      marginBottom: 0,
                      fontSize: "13px",
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    Email: inscripciones@isftmartilleroslp.edu.ar
                    <br />
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/542214895604"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        borderBottom: "1px solid transparent",
                        transition: "border-bottom 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderBottom =
                          "1px solid #ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderBottom =
                          "1px solid transparent";
                      }}
                    >
                      221-489-5604
                    </a>
                  </Paragraph>
                </Space>
              </Col>

              <Col xs={24} sm={12} md={8}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={5}
                    style={{
                      color: "#ffffff",
                      marginBottom: "12px",
                      fontWeight: 700,
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "19.2px",
                    }}
                  >
                    Horario de atención
                  </Title>
                  <Paragraph
                    style={{
                      color: "#ffffff",
                      marginBottom: 0,
                      fontSize: "13px",
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    Lunes a viernes de 8.00 a 12.00 hs y de 18.00 a 20.00 hs
                  </Paragraph>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          justify="center"
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Col xs={24} style={{ textAlign: "center" }}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 700,
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              © Copyright {new Date().getFullYear()} ISFT - Todos los derechos
              reservados
            </Text>
          </Col>
        </Row>
      </AntFooter>
    </AntLayout>
  );
};

export default MainLayout;
