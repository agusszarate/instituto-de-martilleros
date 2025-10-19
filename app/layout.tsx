import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import { theme } from "@/theme/themeConfig";
import StyledComponentsRegistry from "./AntdRegistry";

export const metadata: Metadata = {
  title: "Instituto Superior de Formación Técnica - Colegio de Martilleros",
  description:
    "Instituto Superior de Formación Técnica del Colegio de Martilleros y Corredores Públicos Departamento Judicial La Plata. Carrera de Martillero Público y Corredor con título oficial articulado con la UNLP.",
  keywords:
    "martillero, corredor público, UNLP, La Plata, instituto, carrera universitaria, formación técnica",
  authors: [{ name: "Instituto Superior de Formación Técnica" }],
  openGraph: {
    title: "Instituto Superior de Formación Técnica - Colegio de Martilleros",
    description:
      "Carrera de Martillero Público y Corredor con título oficial articulado con la UNLP.",
    type: "website",
    locale: "es_AR",
    siteName: "ISFT Martilleros La Plata",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/logo-instituto-5.png" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
