export const theme = {
  token: {
    // Colores principales del sitio original
    colorPrimary: "#149dcc", // Azul del sitio original
    colorLink: "#149dcc",
    colorSuccess: "#52c41a",
    colorWarning: "#ff4f38", // Naranja de inscripciones
    colorError: "#ff4f38", // Naranja de los botones CTA
    colorInfo: "#149dcc",
    colorTextBase: "#232323", // Texto oscuro del sitio
    colorBgBase: "#ffffff",

    // Tipografías del sitio original
    fontFamily: '"Roboto", sans-serif',
    fontSize: 16,
    fontSizeHeading1: 48,
    fontSizeHeading2: 48,
    fontSizeHeading3: 28,

    borderRadius: 0, // El sitio original usa bordes rectos

    // Espaciados
    padding: 16,
    margin: 16,
  },
  components: {
    Layout: {
      headerBg: "#ffffff",
      headerColor: "#232323",
      footerBg: "#2e2e2e", // Footer oscuro del original
      bodyBg: "#ffffff",
      footerPadding: "80px 50px 30px",
    },
    Menu: {
      itemColor: "#232323",
      itemHoverColor: "#149dcc",
      itemSelectedColor: "#149dcc",
      horizontalItemSelectedColor: "#149dcc",
      itemBg: "transparent",
      itemHoverBg: "transparent",
      itemSelectedBg: "transparent",
    },
    Button: {
      primaryColor: "#ffffff",
      primaryBg: "#f04f43", // Rojo de los botones del sitio
      defaultBorderColor: "#149dcc",
      defaultColor: "#149dcc",
      borderRadius: 0,
      controlHeight: 48,
      controlHeightLG: 56,
      fontWeight: 600,
      paddingContentHorizontal: 32,
    },
    Typography: {
      fontWeightStrong: 700,
      titleMarginBottom: "0.5em",
      titleMarginTop: 0,
      fontFamilyCode: '"Montserrat", sans-serif',
    },
    Card: {
      borderRadiusLG: 0,
      boxShadow: "none",
    },
    Input: {
      borderRadius: 0,
      controlHeight: 48,
    },
    Form: {
      labelFontSize: 16,
      verticalLabelPadding: "0 0 8px",
    },
  },
};
