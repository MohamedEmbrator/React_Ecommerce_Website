import {
  ExpandMore,
  PersonOutline,
  ShoppingCart,
  ShoppingCartOutlined
} from "@mui/icons-material";
import {
  Badge,
  Container,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
  useTheme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

/*
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
*/
const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px"
  }
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch"
    }
  }
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px"
  }
}));
const options = ["All Categories", "CAR", "Clothes", "Electronics"];
const Header2 = () => {
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
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems="center">
        <ShoppingCartOutlined />
        <Typography variant="body1">E-commerce</Typography>
      </Stack>
      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            // @ts-ignore
            sx={{
              bgcolor: theme.palette.mainColor.main,
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px"
            }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                p: 0,
                mx: 2,
                "&:hover": { background: "none" },
                width: "150px",
                textAlign: "center"
              }}
            >
              <ListItemText secondary={options[selectedIndex]} />
              <ExpandMore />
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
      </Search>

      <Stack direction="row" alignItems="center">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCart />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
