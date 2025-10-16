"use client";

import React from "react";
import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const JobBoardSection: React.FC = () => {
  return (
    <div style={{ background: "#ffffff", padding: "60px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={10}>
            <img
              src="/images/mbr-2.jpg"
              alt="Bolsa de Trabajo"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Col>

          <Col xs={24} lg={14}>
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
              BOLSA DE TRABAJO
            </Title>
            <Paragraph
              style={{
                fontSize: "19.2px",
                color: "#6b6763",
                lineHeight: 1.5,
                marginBottom: 0,
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Nuestra propuesta ofrece al alumno que haya aprobado primer año,
              la posibilidad de ingresar a la bolsa de Trabajo del Instituto
              Superior de Formación Técnica mediante la cual podrá vincularse
              con las inmobiliarias inscriptas en este Colegio.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default JobBoardSection;
