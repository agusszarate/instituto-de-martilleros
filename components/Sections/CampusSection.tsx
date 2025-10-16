"use client";

import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import { LoginOutlined, GlobalOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const CampusSection: React.FC = () => {
  return (
    <div style={{ background: "#f8f9fa", padding: "100px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={10}>
            <img
              src="/images/ffffffffffffff.jpg"
              alt="Campus Virtual"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Col>

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
                CAMPUS VIRTUAL
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
                Todos los alumnos de la carrera podrán descargar material
                exclusivo para todas las materias de cursada.
              </Paragraph>
              <Space
                direction="horizontal"
                size="middle"
                style={{ flexWrap: "wrap" }}
              >
                <Button
                  size="large"
                  icon={<LoginOutlined />}
                  href="#contacto"
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
                  INGRESAR
                </Button>
                <Button
                  size="large"
                  icon={<GlobalOutlined />}
                  href="https://campus.jursoc.unlp.edu.ar/course/index.php?categoryid=136"
                  target="_blank"
                  style={{
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: '"Montserrat", sans-serif',
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    background: "#149dcc",
                    borderColor: "#149dcc",
                    color: "#ffffff",
                    borderRadius: 0,
                  }}
                >
                  CAMPUS JURSOC
                </Button>
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CampusSection;
