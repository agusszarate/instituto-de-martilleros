import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import { theme } from "@/theme/themeConfig";
import StyledComponentsRegistry from "./AntdRegistry";
import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

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
    <html lang="es">
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
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          
          @media screen and (prefers-reduced-motion: no-preference) {
            html {
              scroll-behavior: auto;
            }
          }
          
          .ant-layout-header {
            height: 80px !important;
          }
          
          .ant-layout-header img {
            height: 70px !important;
          }
          
          .ant-layout-header .ant-typography {
            display: none !important;
          }
          
          .ant-layout-header .ant-row {
            padding: 0 20px !important;
          }
          
          .ant-layout-header a {
            justify-content: center !important;
          }
          
          @media (min-width: 768px) {
            .ant-layout-header {
              height: 92.2px !important;
            }
            
            .ant-layout-header img {
              height: 95px !important;
            }
            
            .ant-layout-header .ant-typography {
              display: block !important;
            }
            
            .ant-layout-header .ant-row {
              padding: 0 50px !important;
            }
            
            .ant-layout-header a {
              justify-content: flex-start !important;
            }
          }
          
          .inscriptions-title {
            font-size: 32px !important;
          }
          
          .inscriptions-text {
            font-size: 16px !important;
          }
          
          .inscriptions-button {
            font-size: 14px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          
          @media (min-width: 576px) {
            .inscriptions-title {
              font-size: 40px !important;
            }
            
            .inscriptions-text {
              font-size: 18px !important;
            }
            
            .inscriptions-button {
              font-size: 15px !important;
            }
          }
          
          @media (min-width: 768px) {
            .inscriptions-title {
              font-size: 48px !important;
            }
            
            .inscriptions-text {
              font-size: 19.2px !important;
            }
            
            .inscriptions-button {
              font-size: 16px !important;
              padding-left: 32px !important;
              padding-right: 32px !important;
            }
          }
        `}</style>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <SmoothScroll />
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
