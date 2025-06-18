import { Box, useTheme, Typography } from "@mui/material";

const ErrorPage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h3" align="center" color={theme.palette.error.main}>
        This Page is Not Found
      </Typography>
    </Box>
  );
};

export default ErrorPage;
