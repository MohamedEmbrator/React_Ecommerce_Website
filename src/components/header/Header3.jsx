import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  // @ts-ignore
  KeyboardArrowRightOutlined,
  LaptopOutlined,
  // @ts-ignore
  MenuBookOutlined,
  SportsEsportsOutlined,
  Window
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useState } from "react";
import Links from "./links";

const Header3 = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [expanded, setExpanded] = useState(false);

  // @ts-ignore
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const drawerArray = [
    "Home",
    "Mega menu",
    "Full screen menu",
    "Pages",
    "User account",
    "Vendor account"
  ];
  return (
    <Container sx={{ mt: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            sx={{
              width: 222,
              // @ts-ignore
              bgcolor: theme.palette.mainColor.main,
              color: theme.palette.text.primary
            }}
          >
            <Window />{" "}
            <Typography sx={{ padding: 0, textTransform: "capitalize", mx: 1 }}>
              Categories
            </Typography>{" "}
            <Box flexGrow={1} />
            <KeyboardArrowRightOutlined />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
            sx={{
              ".MuiPaper-root": {
                width: "222px",
                // @ts-ignore
                bgcolor: theme.palette.mainColor.main
              }
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Bikes</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronics</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

      {useMediaQuery("(min-width: 1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

        {useMediaQuery("(max-width: 1199px)") && (
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{ " > .MuiPaper-root": { height: "100%" } }}
        >
          <Box
            sx={{
              width: "444px",
              mx: "auto",
              mt: 6,
              position: "relative",
              pt: 10
            }}
          >
            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{
                position: "absolute",
                top: 0,
                right: 10,
                transition: "0.3s",
                ":hover": { transform: "rotate(0.5turn)", color: "#f00" }
              }}
            >
              <Close />
            </IconButton>
            {drawerArray.map((el, index) => {
              return (
                <Accordion
                  key={index}
                  onChange={handleChange("panel1")}
                  elevation={0}
                  sx={{ bgcolor: "initial" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                  >
                    <Typography
                      component="span"
                      sx={{ width: "33%", flexShrink: 0 }}
                    >
                      {el}
                    </Typography>
                  </AccordionSummary>
                  <List sx={{ py: 0, my: 0 }}>
                    <ListItem sx={{ py: 0, my: 0 }}>
                      <ListItemButton>
                        <ListItemText primary="Link 1" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ py: 0, my: 0 }}>
                      <ListItemButton>
                        <ListItemText primary="Link 2" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ py: 0, my: 0 }}>
                      <ListItemButton>
                        <ListItemText primary="Link 3" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Stack>
    </Container>
  );
};

export default Header3;
