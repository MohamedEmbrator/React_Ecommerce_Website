import { Box, Button, Typography } from "@mui/material";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#2B3445", py: 1.3 }}>
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790"
          }}
          variant="text"
          color="primary"
        >
          ENG\ Mohamed
        </Button>
        &copy; {year}
      </Typography>
    </Box>
  );
};

export default Footer;
