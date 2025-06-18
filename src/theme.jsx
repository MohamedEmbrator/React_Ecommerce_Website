export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? {
      mainColor: {
        main: "#f6f9fc"
      },
      bg: {
        main: "#f6f6f6"
      }
    } : {
      mainColor: {
        main: "#252b32"
        },
        bg: {
        main: "#1d2021"
      }
    })
  }
});
