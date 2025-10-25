"use client";

import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";

const { Title, Paragraph } = Typography;

const CampusSection: React.FC = () => {
  return (
    <div style={{ background: "#f8f9fa", padding: "60px 50px" }}>
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
                  fontSize: "48px",
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
                  fontSize: "19.2px",
                  color: "#232323",
                  lineHeight: 1.5,
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
                {/* <Button
                  size="large"
                  style={{
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: '"Montserrat", sans-serif',
                    paddingLeft: "32px",
                    paddingRight: "32px",
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
                  INGRESAR
                </Button> */}
                <Button
                  size="large"
                  href="https://campus.jursoc.unlp.edu.ar/course/index.php?categoryid=136"
                  target="_blank"
                  style={{
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: '"Montserrat", sans-serif',
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    background: "#353535",
                    borderColor: "#353535",
                    color: "#ffffff",
                    borderRadius: "4px",
                    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0a0a0a";
                    e.currentTarget.style.borderColor = "#0a0a0a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#353535";
                    e.currentTarget.style.borderColor = "#353535";
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
