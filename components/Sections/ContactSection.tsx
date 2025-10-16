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
    <div style={{ background: "#f8f9fa", padding: "100px 50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row justify="center">
          <Col xs={24} lg={16} xl={14}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Title
                level={2}
                style={{
                  color: "#232323",
                  textAlign: "center",
                  marginBottom: "48px",
                  fontSize: "clamp(32px, 4vw, 48px)",
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
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                    style={{
                      height: "48px",
                      fontSize: "16px",
                      fontWeight: 400,
                      fontFamily: '"Montserrat", sans-serif',
                      background: "#ff4f38",
                      borderColor: "#ff4f38",
                      color: "#ffffff",
                      borderRadius: 0,
                      paddingLeft: "48px",
                      paddingRight: "48px",
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
