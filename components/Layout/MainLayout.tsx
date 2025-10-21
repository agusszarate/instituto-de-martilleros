"use client";

import React from "react";
import {
  Layout as AntLayout,
  Row,
  Col,
  Menu,
  Drawer,
  Button,
  Typography,
  Space,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header: AntHeader, Content, Footer: AntFooter } = AntLayout;
const { Title, Text, Paragraph } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const menuItems = [
    { key: "nosotros", label: "NOSOTROS", href: "#nosotros" },
    { key: "carrera", label: "LA CARRERA", href: "#carrera" },
    { key: "contacto", label: "CONTACTO", href: "#contacto" },
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
          height: "92.2px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          borderBottom: "1px solid #efefef",
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ height: "100%", padding: "0 50px" }}
        >
          <Col xs={18} md={14} lg={8}>
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
              }}
            >
              <img
                src="/images/logo-instituto-5.png"
                alt="ISFT"
                style={{
                  height: "95px",
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
              >
                INSTITUTO SUPERIOR DE FORMACIÓN TÉCNICA
              </Title>
            </a>
          </Col>
          {/* Desktop Menu */}
          <Col xs={0} md={10} lg={16}>
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
                lineHeight: "90px",
              }}
            />
          </Col>
          {/* Mobile Menu Button */}
          <Col xs={6} md={0} style={{ textAlign: "right" }}>
            <Button
              type="text"
              icon={
                <MenuOutlined style={{ fontSize: "24px", color: "#232323" }} />
              }
              onClick={() => setDrawerVisible(true)}
            />
          </Col>
        </Row>
      </AntHeader>

      {/* Mobile Drawer */}
      <Drawer
        title="MENÚ"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
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
                  setDrawerVisible(false);
                }}
              >
                {item.label}
              </a>
            ),
          }))}
          style={{ border: "none" }}
        />
      </Drawer>

      {/* Content */}
      <Content style={{ marginTop: "90px" }}>{children}</Content>

      {/* Footer */}
      <AntFooter style={{ background: "#4479d9", padding: "45px 50px 75px" }}>
        <Row gutter={[48, 48]} justify="start">
          <Col xs={24} sm={24} md={6} lg={6}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Title
                level={5}
                style={{
                  color: "#ffffff",
                  marginBottom: "8px",
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
                  marginBottom: "24px",
                  fontSize: "13px",
                  fontFamily: '"Open Sans", sans-serif',
                  lineHeight: 1.5,
                }}
              >
                Avenida 1 N° 671 e/ 45 y 46
                <br />
                La Plata, Buenos Aires
              </Paragraph>

              <Title
                level={5}
                style={{
                  color: "#ffffff",
                  marginBottom: "8px",
                  marginTop: "16px",
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
                  marginBottom: "16px",
                  fontSize: "13px",
                  fontFamily: '"Open Sans", sans-serif',
                  lineHeight: 1.5,
                }}
              >
                Email: info@isftmartilleroslp.edu.ar
                <br />
                Teléfono: (0221) 489-5604
                <br />
                Whatsapp: 2214895604
              </Paragraph>

              <Title
                level={5}
                style={{
                  color: "#ffffff",
                  marginBottom: "8px",
                  marginTop: "16px",
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
                  lineHeight: 1.5,
                }}
              >
                Lunes a viernes de 8.00 a 12.00 hs y de 18.00 a 20.00 hs
              </Paragraph>
            </Space>
          </Col>
        </Row>

        <Row
          justify="start"
          style={{
            marginTop: "16px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Col>
            <Text
              style={{
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 700,
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              © Copyright 2022 ISFT - Todos los derechos reservados
            </Text>
          </Col>
        </Row>
      </AntFooter>
    </AntLayout>
  );
};

export default MainLayout;
