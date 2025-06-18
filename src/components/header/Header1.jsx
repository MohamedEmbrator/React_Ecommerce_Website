import {
  DarkModeOutlined,
  ExpandMore,
  FacebookRounded,
  Instagram,
  LightModeOutlined,
  X
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  MenuItem,
  Menu,
  ListItemButton,
  ListItemText,
  List,
  Container
} from "@mui/material";
import { useState } from "react";
const options = ["EN", "AR", "FR"];

const Header1 = ({ setMode }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: "#283445" }}>
      <Container>
        <Stack direction="row" alignItems="center">
          <Typography
            variant="body2"
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff"
            }}
          >
            HOT
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", fontWeight: "300", color: "#fff" }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} textAlign="right">
            <IconButton
              color="inherit"
              onClick={() => {
                setMode(theme.palette.mode === "light" ? "dark" : "light");
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
              }}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeOutlined  />
              ) : (
                <DarkModeOutlined sx={{ color: "#fff" }} />
              )}
            </IconButton>
          </Box>
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ p: 0, m: 0 }}
            >
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ p: 0, mx: 2 }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": {  color: "#fff" }
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{color: "#fff"}} />
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox"
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ p: "3px 10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <FacebookRounded sx={{ fontSize: "16px", color: "#fff" }} />
          <Instagram sx={{ mx: 1, fontSize: "16px", color: "#fff" }} />
          <X sx={{ fontSize: "16px", color: "#fff" }} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
