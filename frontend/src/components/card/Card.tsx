import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import product from "../../../public/product.jpg";
import { Link, useNavigate } from "react-router-dom";
import { updateProductIdAndCategory } from "../../redux/reducer/ProductsReducer";
import { useAppDispatch } from "../../redux/hooks";

export default function CustomCard({
  productId,
  category,
  productName,
  productImage,
  btnText,
  btnClass,
  productsCount,
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleButtonClick() {
    dispatch(
      updateProductIdAndCategory({ category: category, productId: productId })
    );
    navigate("/products");
  }

  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={productImage}
        alt="unsplash image"
      />

      <CardContent
        orientation="horizontal"
        sx={{ textAlign: "center", height: "4rem", p: '1rem 0rem',}}
      >
        <Typography level="body-xs">{productName}</Typography>
        {productsCount ? 
          (
            <Typography variant="body2" color="textSecondary">
              {`${productsCount} product${productsCount > 1? 's' : ''} available`}
            </Typography>
          ) 
          : null
        }
      </CardContent>

      <CardActions>
        <Button
          size="large"
          // component={Link}
          // to={`/products/${productId}`}
          onClick={handleButtonClick} // Attach the handler here
          sx={{ width: "100%", bgColor: "primary.main" }}
          variant={btnClass}
          aria-label="product name"
        >
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
}
