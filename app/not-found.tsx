"use client";

import React from "react";
import { Typography, Button, Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import MainLayout from "@/components/Layout/MainLayout";

const { Title, Paragraph } = Typography;

export default function NotFound() {
  return (
    <MainLayout>
      <section
        style={{
          background: "#ffffff",
          padding: "120px 50px",
          minHeight: "calc(100vh - 400px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Space
            direction="vertical"
            size="large"
            style={{ width: "100%", gap: "32px" }}
          >
            <Title
              level={1}
              style={{
                color: "#4479d9",
                fontSize: "120px",
                fontWeight: 700,
                fontFamily: '"Montserrat", sans-serif',
                margin: 0,
                lineHeight: 1,
              }}
            >
              404
            </Title>

            <Title
              level={2}
              style={{
                color: "#232323",
                fontSize: "48px",
                fontWeight: 700,
                fontFamily: '"Montserrat", sans-serif',
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              PÁGINA NO ENCONTRADA
            </Title>

            <Paragraph
              style={{
                fontSize: "19.2px",
                color: "#232323",
                lineHeight: 1.5,
                margin: 0,
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Lo sentimos, la página que estás buscando no existe o ha sido
              movida.
            </Paragraph>

            <Button
              size="large"
              href="/"
              icon={<HomeOutlined />}
              style={{
                height: "48px",
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: '"Montserrat", sans-serif',
                background: "#ff4d00",
                borderColor: "#ff4d00",
                color: "#ffffff",
                borderRadius: "4px",
                boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                paddingLeft: "48px",
                paddingRight: "48px",
                marginTop: "16px",
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
              Volver al inicio
            </Button>
          </Space>
        </div>
      </section>
    </MainLayout>
  );
}
