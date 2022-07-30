export const fonts = {
  heading: "Mono Normal",
  body: "Inter, sans-serif",
};

export const Heading = {
  sizes: null,
  variants: {
    h1: {
      textStyle: "h1",
    },
    h2: {
      textStyle: "h2",
    },
    h3: {
      textStyle: "h3",
    },
  },
};

export const Text = {
  sizes: null,
  variants: {
    title: (props) => ({
      textStyle: "title",
      color: props.colorMode === "light" ? "primary.dark" : "secondary.dark",
    }),
    subtitle: (props) => ({
      textStyle: "subtitle",
      color: props.colorMode === "light" ? "primary.dark" : "secondary.dark",
    }),
    footerText: (props) => ({
      textStyle: "footerText",
      color: props.colorMode === "light" ? "primary.dark" : "secondary.dark",
    }),
    small: {
      textStyle: "small",
    },
  },
  defaultProps: {
    variant: "body",
  },
};

export const textStyles = {
  h1: {
    fontSize: { base: "8px", sm: "22px", md: "20px", lg: "24px" },
    fontWeight: 400,
    lineHeight: { base: "130%", sm: "130%", md: "130%", lg: "130%" },
  },
  h2: {
    fontSize: { base: "18px", sm: "22px", md: "20px", lg: "24px" },
    fontWeight: 700,
    lineHeight: { base: "130%", sm: "130%", md: "130%", lg: "130%" },
  },
  h3: {
    fontSize: { base: "12px", sm: "22px", md: "20px", lg: "24px" },
    fontWeight: 400,
    casing: "uppercase",
    lineHeight: { base: "130%", sm: "130%", md: "130%", lg: "130%" },
  },
  title: {
    fontSize: { base: "12px", sm: "18px", md: "20px", xl: "32px" },
    fontWeight: 700,
    lineHeight: { base: "130%", sm: "130%", md: "130%", lg: "130%" },
  },
  subtitle: {
    fontSize: { base: "10px", sm: "18px", md: "18px", xl: "22px" },
    fontWeight: 300,
    lineHeight: { base: "130%", sm: "130%", md: "130%", lg: "130%" },
  },
  footerText: {
    fontSize: { base: "8px", sm: "12px", md: "14px", xl: "16px" },
    fontWeight: 300,
    lineHeight: { base: "130%", sm: "130%", md: "130%", lg: "130%" },
  },
};
