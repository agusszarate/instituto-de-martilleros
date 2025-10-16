"use client";

import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  SafetyOutlined,
  BookOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: (
        <SafetyOutlined
          style={{ fontSize: "64px", color: "#232323", marginBottom: "20px" }}
        />
      ),
      title: "VALORES",
      description:
        "Honestidad, transparencia, calidad y excelencia, son los valores que nos guían desde hace más de 20 años.",
    },
    {
      icon: (
        <BookOutlined
          style={{ fontSize: "64px", color: "#232323", marginBottom: "20px" }}
        />
      ),
      title: "ENSEÑANZA",
      description:
        "Nuestro plan de estudios es un plan moderno, pensado para los tiempos que vivimos.",
    },
    {
      icon: (
        <TrophyOutlined
          style={{ fontSize: "64px", color: "#232323", marginBottom: "20px" }}
        />
      ),
      title: "TÍTULO OFICIAL",
      description:
        "Nuestro convenio con la UNLP hace que podamos ofrecer títulos artículado con la prestigiosa casa de estudios.",
    },
  ];

  return (
    <Row gutter={[48, 48]} justify="center">
      {values.map((value, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <div style={{ textAlign: "center", padding: "0 20px" }}>
            {value.icon}
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
              {value.title}
            </Title>
            <Paragraph
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#232323",
                textAlign: "center",
                marginBottom: 0,
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              {value.description}
            </Paragraph>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ValuesSection;
