"use client";

import React from "react";
import { Row, Col, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

const ContactSection: React.FC = () => {
  return (
    <div style={{ background: "#f8f9fa", padding: "60px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row justify="center">
          <Col xs={24} lg={16} xl={14}>
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
                  marginBottom: "48px",
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
                  marginBottom: 0,
                }}
              >
                Escribinos a{" "}
                <a
                  href="mailto:info@isftmartilleroslp.edu.ar"
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
                  info@isftmartilleroslp.edu.ar
                </a>
                <br />o llamanos al{" "}
                <a
                  href="tel:+542214895604"
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
                  (0221) 489-5604
                </a>
              </Paragraph>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactSection;
