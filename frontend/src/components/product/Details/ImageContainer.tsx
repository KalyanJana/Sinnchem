import { Box, Button, Card, CardMedia } from "@mui/material";
import productImage from "../../../assets/Image/product.jpg";

function ImageContainer() {
  return (
    <Card sx={{height: '100%'}}>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: "100%" }}
        image={productImage}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default ImageContainer;
