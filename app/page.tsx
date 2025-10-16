"use client";

import React from "react";
import { Typography, Space, Row, Col, Button } from "antd";
import MainLayout from "@/components/Layout/MainLayout";
import ValuesSection from "@/components/Sections/ValuesSection";
import RepresentativesSection from "@/components/Sections/RepresentativesSection";
import CareerSection from "@/components/Sections/CareerSection";
import CampusSection from "@/components/Sections/CampusSection";
import InscriptionsSection from "@/components/Sections/InscriptionsSection";
import JobBoardSection from "@/components/Sections/JobBoardSection";
import ContactSection from "@/components/Sections/ContactSection";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        style={{
          background:
            'linear-gradient(135deg, rgba(20, 157, 204, 0.85) 0%, rgba(41, 98, 137, 0.85) 100%), url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80") center/cover no-repeat',
          padding: "180px 50px 120px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={14}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <Title
                  level={1}
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(38px, 5vw, 62px)",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.1,
                    fontFamily: '"Montserrat", sans-serif',
                    textTransform: "uppercase",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  INSTITUTO
                  <br />
                  SUPERIOR
                  <br />
                  DE FORMACIÓN
                  <br />
                  TÉCNICA
                </Title>
                <Paragraph
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(18px, 2.5vw, 20px)",
                    margin: "24px 0",
                    lineHeight: 1.6,
                    fontFamily: '"Roboto", sans-serif',
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  Colegio de Martilleros y Corredores Públicos
                  <br />
                  Departamento Judicial La Plata.
                </Paragraph>
                <Button
                  size="large"
                  href="https://isftmartilleroslp.edu.ar/assets/files/Planilla-deInscripcin2023.docx"
                  style={{
                    height: "56px",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: '"Montserrat", sans-serif',
                    textTransform: "uppercase",
                    paddingLeft: "48px",
                    paddingRight: "48px",
                    marginTop: "16px",
                    background: "#ff4f38",
                    borderColor: "#ff4f38",
                    color: "#ffffff",
                    borderRadius: 0,
                  }}
                >
                  INSCRIPCIONES 2023
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </section>

      {/* Nosotros Section */}
      <section
        id="nosotros"
        style={{ padding: "100px 50px", background: "#ffffff" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "#232323",
              marginBottom: "60px",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            NOSOTROS
          </Title>
          <ValuesSection />
          <div style={{ margin: "100px 0 60px" }} />
          <RepresentativesSection />
        </div>
      </section>

      {/* Carrera Section */}
      <section id="carrera">
        <CareerSection />
      </section>

      {/* Campus Section */}
      <section id="campus">
        <CampusSection />
      </section>

      {/* Inscripciones Section */}
      <section id="inscripciones">
        <InscriptionsSection />
      </section>

      {/* Bolsa de Trabajo Section */}
      <section>
        <JobBoardSection />
      </section>

      {/* Contacto Section */}
      <section id="contacto">
        <ContactSection />
      </section>

      {/* Redes Sociales Section */}
      <section
        style={{
          padding: "60px 50px",
          background: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title
            level={3}
            style={{ color: "#232323", marginBottom: "32px", fontWeight: 600 }}
          >
            Estemos en contacto en nuestras redes sociales
          </Title>
        </div>
      </section>
    </MainLayout>
  );
}
