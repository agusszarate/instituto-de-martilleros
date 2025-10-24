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
          style={{ fontSize: "80px", color: "#6592e6", marginBottom: "32px" }}
        />
      ),
      title: "VALORES",
      description:
        "Honestidad, transparencia, calidad y excelencia, son los valores que nos guían desde hace más de 20 años.",
    },
    {
      icon: (
        <BookOutlined
          style={{ fontSize: "80px", color: "#6592e6", marginBottom: "32px" }}
        />
      ),
      title: "ENSEÑANZA",
      description:
        "Nuestro plan de estudios es un plan moderno, pensado para los tiempos que vivimos.",
    },
    {
      icon: (
        <TrophyOutlined
          style={{ fontSize: "80px", color: "#6592e6", marginBottom: "32px" }}
        />
      ),
      title: "TÍTULO OFICIAL",
      description:
        "Nuestro convenio con la UNLP hace que podamos ofrecer títulos artículado con la prestigiosa casa de estudios.",
    },
  ];

  return (
    <Row gutter={[24, 48]} justify="center">
      {values.map((value, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <div style={{ textAlign: "center", padding: "0 10px" }}>
            {/* {value.icon} */}
            <Title
              level={3}
              style={{
                color: "#232323",
                marginBottom: "16px",
                fontSize: "19.2px",
                fontWeight: 700,
                textAlign: "center",
                fontFamily: '"Roboto", sans-serif',
                textTransform: "uppercase",
                lineHeight: 1.5,
              }}
            >
              {value.title}
            </Title>
            <Paragraph
              style={{
                fontSize: "19.2px",
                lineHeight: 1.5,
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
