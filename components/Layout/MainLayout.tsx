"use client";

import React from "react";
import { Layout as AntLayout, Row, Col, Menu, Typography, Space } from "antd";

const { Header: AntHeader, Content, Footer: AntFooter } = AntLayout;
const { Title, Text, Paragraph } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const HEADER_HEIGHT = 100;

  const menuItems = [
    { key: "nosotros", label: "NOSOTROS", href: "#nosotros" },
    { key: "carrera", label: "LA CARRERA", href: "#carrera" },
    { key: "inscripciones", label: "INSCRIPCIONES", href: "#contacto" },
  ];

  return (
    <AntLayout style={{ minHeight: "100vh", background: "#ffffff" }}>
      <style jsx global>{`
        @media (max-width: 991px) {
          .header-title {
            display: none !important;
          }
          .header-logo-link {
            justify-content: center !important;
          }
        }
      `}</style>
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
          style={{ height: "100%", padding: "0 50px" }}
        >
          <Col xs={24} sm={24} md={12} lg={7}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="header-logo-link"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer",
                justifyContent: "flex-start",
              }}
            >
              <img
                src="/images/logo-instituto-5.png"
                alt="ISFT"
                style={{
                  height: "80px",
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
                }}
                className="header-title"
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
                        const targetPosition =
                          target.getBoundingClientRect().top +
                          window.pageYOffset -
                          HEADER_HEIGHT;
                        window.scrollTo({
                          top: targetPosition,
                          behavior: "smooth",
                        });
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
                lineHeight: String(HEADER_HEIGHT) + "px",
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
                    Email: info@isftmartilleroslp.edu.ar
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
                        whiteSpace: "nowrap",
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
                    <br />
                    Facebook:{" "}
                    <a
                      href="https://www.facebook.com/carrerademartillerosenlaplata"
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
                      ISFT Colegio de martilleros
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
          align="middle"
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            position: "relative",
          }}
        >
          <Col
            xs={{ span: 24, order: 2 }}
            md={{ span: 8, order: 1 }}
            style={{ textAlign: "center" }}
          >
            <Space
              align="center"
              size="middle"
              style={{ justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: "12px",
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                Consultoría y Procesos
              </Text>
              <img
                src="/images/cas-marca-negativo-300.png"
                alt="CAS Informática"
                style={{
                  height: "35px",
                  width: "auto",
                }}
              />
            </Space>
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            md={{ span: 8, order: 2 }}
            style={{ textAlign: "center", marginBottom: "16px" }}
          >
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
          <Col xs={{ span: 0 }} md={{ span: 8, order: 3 }}></Col>
        </Row>
      </AntFooter>
    </AntLayout>
  );
};

export default MainLayout;
