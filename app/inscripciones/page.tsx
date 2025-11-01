"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Space,
  Radio,
  DatePicker,
  Divider,
  message,
} from "antd";
import MainLayout from "@/components/Layout/MainLayout";

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function InscripcionesPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      console.log("Formulario enviado:", values);
      message.success("Formulario enviado correctamente");
      form.resetFields();
    } catch (error) {
      message.error("Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div style={{ background: "#f8f9fa", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: "100%", background: "#ffffff", padding: "40px", borderRadius: "8px" }}
          >
            <div style={{ textAlign: "center" }}>
              <Title level={2} style={{ color: "#4479d9", marginBottom: "8px" }}>
                Instituto Superior De Formación Técnica
              </Title>
              <Text style={{ fontSize: "14px", color: "#666" }}>
                Colegio De Martilleros y Corredores Públicos Del Departamento Judicial De La Plata
              </Text>
              <Title level={3} style={{ marginTop: "24px", marginBottom: "8px" }}>
                SOLICITUD DE INSCRIPCIÓN
              </Title>
              <Text>DISTRITO: 1 – LA PLATA – FECHA DE INSCRIPCIÓN: {new Date().toLocaleDateString()}</Text>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              style={{ marginTop: "32px" }}
            >
              <Divider orientation="left">
                <Text strong style={{ fontSize: "16px" }}>DATOS DEL ALUMNO/A</Text>
              </Divider>

              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    label="APELLIDO Y NOMBRE/S"
                    name="nombreCompleto"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Ingrese apellido y nombres completos" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="DNI"
                    name="dni"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Ingrese DNI sin puntos" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="FECHA DE NACIMIENTO"
                    name="fechaNacimiento"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" placeholder="Seleccione fecha" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="LUGAR DE NAC.: Ciudad"
                    name="ciudadNacimiento"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Ciudad" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="Provincia"
                    name="provinciaNacimiento"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Provincia" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="Nacionalidad"
                    name="nacionalidad"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Nacionalidad" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="DOMICILIO: Calle"
                    name="calle"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Calle" />
                  </Form.Item>
                </Col>
                <Col xs={12} md={3}>
                  <Form.Item
                    label="Nº"
                    name="numero"
                    rules={[{ required: true, message: "Requerido" }]}
                  >
                    <Input placeholder="Nº" />
                  </Form.Item>
                </Col>
                <Col xs={6} md={3}>
                  <Form.Item label="Piso" name="piso">
                    <Input placeholder="Piso" />
                  </Form.Item>
                </Col>
                <Col xs={6} md={3}>
                  <Form.Item label="Dpto" name="departamento">
                    <Input placeholder="Dpto" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={9}>
                  <Form.Item
                    label="LOCALIDAD"
                    name="localidad"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Localidad" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="TELÉFONO CELULAR"
                    name="telefonoCelular"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Teléfono celular" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="TELÉFONO PARTICULAR" name="telefonoParticular">
                    <Input placeholder="Teléfono particular" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={16}>
                  <Form.Item label="OTRO TELÉFONO" name="otroTelefono">
                    <Input placeholder="Otro teléfono" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="PERTENECE A" name="otroTelefonoPertenece">
                    <Input placeholder="A quién pertenece" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    label="CORREO ELECTRÓNICO"
                    name="email"
                    rules={[
                      { required: true, message: "Este campo es requerido" },
                      { type: "email", message: "Ingrese un email válido" },
                    ]}
                  >
                    <Input placeholder="correo@ejemplo.com" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={16}>
                  <Form.Item
                    label="TÍTULO"
                    name="titulo"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Título secundario" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="AÑO DE EGRESO"
                    name="anioEgreso"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Año" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={16}>
                  <Form.Item
                    label="ESCUELA"
                    name="escuela"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Nombre de la escuela" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="DISTRITO"
                    name="distrito"
                    rules={[{ required: true, message: "Este campo es requerido" }]}
                  >
                    <Input placeholder="Distrito" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={6}>
                  <Form.Item
                    label="TRABAJA"
                    name="trabaja"
                    rules={[{ required: true, message: "Seleccione una opción" }]}
                  >
                    <Radio.Group>
                      <Radio value="si">SI</Radio>
                      <Radio value="no">NO</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} md={18}>
                  <Form.Item label="ACTIVIDAD" name="actividad">
                    <Input placeholder="Actividad laboral" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item label="HORARIO HABITUAL" name="horarioHabitual">
                    <Input placeholder="Horario de trabajo habitual" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="COBERTURA MÉDICA"
                    name="coberturaMedica"
                    rules={[{ required: true, message: "Seleccione una opción" }]}
                  >
                    <Radio.Group>
                      <Radio value="si">SI</Radio>
                      <Radio value="no">NO</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} md={10}>
                  <Form.Item label="OBRA SOCIAL" name="obraSocial">
                    <Input placeholder="Nombre de la obra social" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item label="Nº DE AFILIADO" name="numeroAfiliado">
                    <Input placeholder="N° de afiliado" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="PATOLOGÍA DE BASE"
                    name="patologiaBase"
                    rules={[{ required: true, message: "Seleccione una opción" }]}
                  >
                    <Radio.Group>
                      <Radio value="si">SI</Radio>
                      <Radio value="no">NO</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} md={10}>
                  <Form.Item label="CUÁL" name="cualPatologia">
                    <Input placeholder="Especifique la patología" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item label="TOMA MEDICACIÓN" name="tomaMedicacion">
                    <Radio.Group>
                      <Radio value="si">SI</Radio>
                      <Radio value="no">NO</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    label="TURNO EN EL QUE SE INSCRIBE"
                    name="turno"
                    rules={[{ required: true, message: "Seleccione un turno" }]}
                  >
                    <Radio.Group>
                      <Radio value="manana">MAÑANA</Radio>
                      <Radio value="noche">NOCHE</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <Divider />

              <div style={{ background: "#f0f0f0", padding: "16px", borderRadius: "4px", marginBottom: "24px" }}>
                <Text strong>LOS DATOS QUE ANTECEDEN REVISTEN CARÁCTER DE DECLARACIÓN JURADA</Text>
              </div>

              <Divider orientation="left">
                <Text strong style={{ fontSize: "16px" }}>DATOS DEL PADRE/MADRE O TUTOR</Text>
              </Divider>

              <div style={{ marginBottom: "16px" }}>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  (En el caso de ser menor de 18 años la Inscripción deberá ser autorizada y firmada por los padres o tutores)
                </Text>
              </div>

              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item label="APELLIDO Y NOMBRE/S DE LA MADRE O TUTOR" name="nombreMadreTutor">
                    <Input placeholder="Apellido y nombres completos de la madre o tutor" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item label="APELLIDO Y NOMBRE/S DEL PADRE O TUTOR" name="nombrePadreTutor">
                    <Input placeholder="Apellido y nombres completos del padre o tutor" />
                  </Form.Item>
                </Col>
              </Row>

              <Divider />

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  size="large"
                  style={{
                    width: "100%",
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: 600,
                    background: "#4479d9",
                    borderColor: "#4479d9",
                  }}
                >
                  ENVIAR SOLICITUD DE INSCRIPCIÓN
                </Button>
              </Form.Item>

              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Al enviar este formulario declaro que los datos proporcionados son correctos y veraces.
                </Text>
              </div>
            </Form>
          </Space>
        </div>
      </div>
    </MainLayout>
  );
}
