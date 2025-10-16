"use client";

import React from "react";
import { Row, Col, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

const RepresentativesSection: React.FC = () => {
  const representatives = [
    {
      title: "Martillero",
      name: "Aníbal Amadeo Fortuna",
    },
    {
      title: "Martillero",
      name: "Miguel Ángel Bañez",
    },
    {
      title: "Directora",
      name: "Martillera Noelia Francisco",
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Title
        level={2}
        style={{
          color: "#232323",
          marginBottom: "60px",
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 700,
          textAlign: "center",
          fontFamily: '"Montserrat", sans-serif',
          textTransform: "uppercase",
          lineHeight: 1.1,
        }}
      >
        REPRESENTANTES LEGALES
      </Title>

      <Row gutter={[48, 48]} justify="start">
        {representatives.map((rep, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <div style={{ textAlign: "left" }}>
              <Paragraph
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#232323",
                  textAlign: "left",
                  marginBottom: 0,
                  whiteSpace: "pre-line",
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                {rep.title}
                <br />
                {rep.name}
              </Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default RepresentativesSection;
