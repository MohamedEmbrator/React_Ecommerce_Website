//@ts-nocheck
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
  CircularProgress
} from "@mui/material";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import { useGetProductsByNameQuery } from "../../Redux/productsApi";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const theme = useTheme();
  const [alignment, setAlignMent] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignMent(newAlignment);
  };
  const [open, setOpen] = useState(false);
  const [clickedProduct, setclickedProduct] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { data, error, isLoading } = useGetProductsByNameQuery("");
  const [products, setProducts] = useState(!isLoading && data ? data : []);
  useEffect(() => {
    setProducts(!isLoading && data ? data : []);
  }, [isLoading]);
  if (error) {
    return (
      <Typography variant="h3" color="red">
        {error.msg}
      </Typography>
    );
  }
  if (isLoading) {
    return <CircularProgress size="10rem" />;
  }
  if (!isLoading && data) {
    return (
      <Container sx={{ mt: 2, py: 9 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={3}
        >
          <Box>
            <Typography variant="h6">Slected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <Box>
            <ToggleButtonGroup
              color="error"
              value={alignment}
              exclusive
              onChange={handleAlignment}
              sx={{
                ".Mui-selected": {
                  border: "1px solid rgba(253, 69, 96, 0.5) !important",
                  color: "#e94560",
                  backgroundColor: "initial !important"
                }
              }}
            >
              <ToggleButton
                className="shuffle-btn"
                value="left"
                sx={{ color: theme.palette.text.primary }}
                onClick={() => {
                  setProducts([]);
                  setTimeout(() => {
                    setProducts(data);
                  }, 0);
                }}
              >
                All Products
              </ToggleButton>
              <ToggleButton
                className="shuffle-btn"
                value="center"
                sx={{
                  mx: "16px !important",
                  color: theme.palette.text.primary
                }}
                onClick={() => {
                  setProducts([]);
                  setTimeout(() => {
                    setProducts(
                      data.filter((product) => product.category === "men")
                    );
                  }, 0);
                }}
              >
                Men Category
              </ToggleButton>
              <ToggleButton
                className="shuffle-btn"
                value="right"
                sx={{ color: theme.palette.text.primary }}
                onClick={() => {
                  setProducts([]);
                  setTimeout(() => {
                    setProducts(
                      data.filter((product) => product.category === "women")
                    );
                  }, 0);
                }}
              >
                Women Categroy
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          justifyContent="space-evenly"
        >
          <AnimatePresence>
            {products.map((product, index) => {
              return (
                <Card
                  component={motion.div}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1, type: "spring", stiffness: 150 }}
                  key={index}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                      transition: "0.3s",
                      rotate: "1deg",
                      scale: "1.1"
                    }
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    image={`public/images/${product.images[0]}`}
                    title="Green Image"
                  />
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        {product.price}$
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      size="large"
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => {
                        handleClickOpen();
                        setclickedProduct(product);
                      }}
                    >
                      <AddShoppingCartOutlined
                        fontSize="small"
                        sx={{ mr: 1 }}
                      />
                      Add to cart
                    </Button>
                    <Rating
                      name="read-only"
                      value={product.rate}
                      precision={0.5}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": {
                color: "red",
                rotate: "180deg",
                transition: "0.3s"
              },
              position: "absolute",
              top: 0,
              right: 10
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
