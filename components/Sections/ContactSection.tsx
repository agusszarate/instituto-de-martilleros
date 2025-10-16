"use client";

import React from "react";
import { Row, Col, Form, Input, Button, Typography, Space } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    form.resetFields();
  };

  return (
    <div style={{ background: "#f8f9fa", padding: "60px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row justify="center">
          <Col xs={24} lg={16} xl={14}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
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
                CONTACTO
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Por favor ingrese su nombre",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Nombre y apellido"
                        style={{ borderRadius: 0, height: "48px" }}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Por favor ingrese su email",
                        },
                        {
                          type: "email",
                          message: "Por favor ingrese un email válido",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Mail"
                        style={{ borderRadius: 0, height: "48px" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Por favor ingrese su mensaje" },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Mensaje"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>

                <Form.Item style={{ textAlign: "center", marginBottom: 0 }}>
                  <Button
                    // icon={<SendOutlined />}
                    htmlType="submit"
                    size="large"
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
                    Enviar mensaje
                  </Button>
                </Form.Item>
              </Form>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactSection;
