"use client";

import React from "react";
import { Typography, Space, Row, Col, Button } from "antd";
import MainLayout from "@/components/Layout/MainLayout";
import ValuesSection from "@/components/Sections/ValuesSection";
import CareerSection from "@/components/Sections/CareerSection";
import CampusSection from "@/components/Sections/CampusSection";
import InscriptionInfoSection from "@/components/Sections/InscriptionInfoSection";
import JobBoardSection from "@/components/Sections/JobBoardSection";
import InscriptionFormSection from "@/components/Sections/InscriptionFormSection";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        style={{
          background:
            'url("/images/hero-background.jpg") center/cover no-repeat',
          padding: "40px 50px 120px",
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
                size="small"
                style={{ width: "100%", paddingLeft: "40px", gap: "18px" }}
              >
                <Title
                  level={1}
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(30px, 4vw, 50px)",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.1,
                    fontFamily: '"Montserrat", sans-serif',
                    textTransform: "uppercase",
                    // textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
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
                    fontSize: "clamp(18px, 2.5vw, 19px)",
                    lineHeight: 1.6,
                    margin: 0,
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
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#contacto");
                    if (target) {
                      const headerOffset = 80;
                      const elementPosition =
                        target.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  style={{
                    width: "217px",
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: '"Montserrat", sans-serif',
                    textTransform: "uppercase",
                    background: "#ff4d00",
                    borderColor: "#ff4d00",
                    color: "#ffffff",
                    borderRadius: "4px",
                    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
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
                  INSCRIPCIONES
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </section>

      {/* Nosotros Section */}
      <section
        id="nosotros"
        style={{ padding: "60px 50px", background: "#ffffff" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "#4479d9",
              marginBottom: "60px",
              fontSize: "48px",
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: '"Montserrat", sans-serif',
              lineHeight: 1.1,
            }}
          >
            NOSOTROS
          </Title>
          <ValuesSection />
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

      {/* Inscripciones Info Section */}
      <section id="inscripciones">
        <InscriptionInfoSection />
      </section>

      {/* Bolsa de Trabajo Section */}
      <section>
        <JobBoardSection />
      </section>

      {/* Inscription Form Section */}
      <section id="contacto">
        <InscriptionFormSection />
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
            style={{
              color: "#4479d9",
              marginBottom: "32px",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: '"Montserrat", sans-serif',
              lineHeight: 1.5,
            }}
          >
            Estemos en contacto - inscripciones@isftmartilleroslp.edu.ar
          </Title>
        </div>
      </section>
    </MainLayout>
  );
}
