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
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let isScrolling = false;
                let velocity = 0;
                let lastScrollY = 0;
                let animationFrame;
                
                function smoothScroll() {
                  if (Math.abs(velocity) > 0.5) {
                    window.scrollBy(0, velocity);
                    velocity *= 0.92;
                    animationFrame = requestAnimationFrame(smoothScroll);
                  } else {
                    isScrolling = false;
                    velocity = 0;
                  }
                }
                
                window.addEventListener('wheel', function(e) {
                  if (e.target.closest('a[href^="#"]')) return;
                  
                  const delta = e.deltaY;
                  velocity += delta * 0.35;
                  
                  if (!isScrolling) {
                    isScrolling = true;
                    if (animationFrame) cancelAnimationFrame(animationFrame);
                    animationFrame = requestAnimationFrame(smoothScroll);
                  }
                }, { passive: true });
              })();
            `,
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
