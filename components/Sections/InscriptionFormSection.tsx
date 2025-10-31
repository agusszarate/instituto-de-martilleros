"use client";

import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const InscriptionFormSection: React.FC = () => {
  return (
    <div style={{ background: "#f8f9fa", padding: "60px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row justify="center">
          <Col xs={24} md={18} lg={14} xl={12}>
            <Space
              direction="vertical"
              size="large"
              style={{ width: "100%", textAlign: "center" }}
            >
              <Title
                level={2}
                style={{
                  color: "#4479d9",
                  textAlign: "center",
                  marginBottom: "24px",
                  fontSize: "48px",
                  fontWeight: 700,
                  fontFamily: '"Montserrat", sans-serif',
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                INSCRIPCIONES
              </Title>

              <Paragraph
                style={{
                  color: "#232323",
                  fontSize: "19.2px",
                  lineHeight: 1.8,
                  fontFamily: '"Roboto", sans-serif',
                  marginBottom: "32px",
                }}
              >
                Descargá la planilla de inscripción, completala y enviala por email a{" "}
                <a
                  href="mailto:inscripciones@isftmartilleroslp.edu.ar"
                  style={{
                    color: "#4479d9",
                    fontWeight: 600,
                    textDecoration: "none",
                    borderBottom: "2px solid transparent",
                    transition: "border-bottom 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderBottom = "2px solid #4479d9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderBottom =
                      "2px solid transparent";
                  }}
                >
                  inscripciones@isftmartilleroslp.edu.ar
                </a>
              </Paragraph>

              <Button
                size="large"
                icon={<DownloadOutlined />}
                href="/Planilla de Inscripción  V102025.docx"
                download
                style={{
                  height: "56px",
                  fontSize: "16px",
                  fontWeight: 600,
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  background: "#4479d9",
                  borderColor: "#4479d9",
                  color: "#ffffff",
                  borderRadius: "4px",
                  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                  fontFamily: '"Montserrat", sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3367c2";
                  e.currentTarget.style.borderColor = "#3367c2";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#4479d9";
                  e.currentTarget.style.borderColor = "#4479d9";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2)";
                }}
              >
                DESCARGAR PLANILLA DE INSCRIPCIÓN
              </Button>

              <Paragraph
                style={{
                  color: "#666",
                  fontSize: "14px",
                  marginTop: "16px",
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                También podés contactarnos por WhatsApp al{" "}
                <a
                  href="https://wa.me/542214895604"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#4479d9",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  221-489-5604
                </a>
              </Paragraph>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InscriptionFormSection;
