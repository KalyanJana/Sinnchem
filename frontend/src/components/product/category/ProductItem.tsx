import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import productImage from "../../../assets/Image/product.jpg";
import { Button, Grid, List, ListItem, Paper } from "@mui/material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductInquiryModal from "../../modal/ProductInquiryModal";


function ProductItem({product}) {
  const [selectedImage, setSelectedImage] = React.useState(product.images[0])
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleImageClick = (image)=>{
    setSelectedImage(image)
  }

  return (
    <Grid container sx={{display: 'flex', justifyContent: 'space-between',}}>
      {/* image container and button for above mobile device */}
      <Grid item xs={12} sm={6} md={6}
        sx={{
            display: 'flex',
            flexDirection: 'column', 
            gap: '1rem', 
            alignItems: 'flex-end', 
            // position: "sticky",
            position: { xs: "static", sm: "sticky" },
            top: { md: "7.5rem" },
            mb: { xs: "2rem", md: '0px' },
            // top: "6rem", // Distance from the top for the sticky effect
            height: "fit-content", // Keeps the container size fixed
            // border: '1px solid red'
          }}
      >
        {/* image */}
        <Grid
          sx={{
            display: "flex",
            filexDirection: "row",
            gap: '1rem'
          }}
        >
          {/* child image  */}
          <Grid item xs={2} sx={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}} >
            {
              product.images.map((img, index)=>{
                return(
                  <Grid
                    item
                    key={index}
                    component={Paper}
                    onClick={()=>handleImageClick(img)}
                    sx={{cursor: 'pointer'}}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "100%", height: "50px"}}
                      // image={productImage}
                      image={img}
                      alt={`Product thumbnail ${index + 1}`}
                    />
                  </Grid>
                )
              })
            }
          </Grid>

          {/* main image  */}
          <Grid item xs={10} component={Paper}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "400px"}}
              // image={productImage}
              image={selectedImage}
              alt="Main product"
            />
          </Grid>
          
        </Grid>

        {/* button for above mobile view device  */}
        <Grid item md={9.6} sx={{width: '100%', mt: '1rem', display: {xs: 'none', md: 'block'}}}>
          <Button
              variant="outlined"
              sx={{ width: "100%", backgroundColor:'#7c7cf8', color: 'white' }}
              onClick={handleModalOpen}
            >
              Yes, I'm Interested
          </Button>
        </Grid>
      </Grid>
      
      {/* details container  */}
      <Grid item xs={12} sm={5.5} md={5.5}
      >
        <ProductDetails product ={product} handleModalOpen={handleModalOpen}/>
      </Grid>

      {/* button for mobile view  */}
      <Grid item xs={12} sx={{width: '100%', mt: '1rem', display: {md: 'none'}}}>
          <Button
              variant="outlined"
              sx={{ width: "100%", backgroundColor:'#7c7cf8', color: 'white' }}
              onClick={handleModalOpen}
            >
              Yes, I'm Interested
          </Button>
      </Grid>
      <ProductInquiryModal
        open={isModalOpen}
        onClose={handleModalClose}
        product={product}
      />
    </Grid>
  );
}

export default ProductItem;
