import { Box, Button, Card, Container, Fade, Grid } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import CustomCard from "../../components/card/Card";
import ProductAccordion from "../../components/product/accordiam/ProductAccordion";
import CategoryContainer from "../../components/product/category/CategoryContainer";
import { useAppSelector } from "../../redux/hooks";
import CategoryItem from "../../components/product/category/CategoryItem";
import { useLocation, useParams } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { SettingsPhoneTwoTone } from "@mui/icons-material";
import WhatsAppButton from "../../components/Whatshap";

function ProductsContainer() {
  const storedCategoryDetails = useAppSelector(state => state.products.categoryDetails)

  const [showScrollButton, setShowScrollButton] = useState(false)

  // State to hold the selected product and category for proper tab selection
  const [selectedProduct, setSelectedProduct] = useState({ category: "" , productId: null });
  // console.log("selectedProduct", selectedProduct)

  const categoryRefs = useRef({})

  const scrollToCategory = (category) => {
    categoryRefs.current[category]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollToTop = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 200){
        setShowScrollButton(true)
      }else{
        setShowScrollButton(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <Container maxWidth="lg" sx={{p: '0rem'}}>
      <Grid container spacing={2}>
        <Grid item sx={{ display: { xs: "none", sm: "block" }}} sm={3} md={3}>
          <Box sx={{height: "auto", mt: '1rem', position: 'sticky', top: '0px',}}>
            <ProductAccordion scrollToCategory={scrollToCategory} setSelectedProduct={setSelectedProduct}/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={9} md={9}>
          {
            storedCategoryDetails.map(item=>{
              return (
                <Box 
                  sx={{mt: '1rem',  overflow: 'clip'}} 
                  key={item.category}
                  ref={(el) => (categoryRefs.current[item.category] = el)} // Attach each category to a ref
                >
                  <CategoryItem category={item} selectedProduct={selectedProduct}/>
                </Box>
              )
            })
          }          
        </Grid>
      </Grid>

       {/* Scroll-to-Top Button */}
       <Fade in={showScrollButton}>
        <Button
          onClick={handleScrollToTop}
          sx={{
            position: "fixed",
            bottom: "2rem",
            right: "6rem",
            zIndex: 1000,
            borderRadius: "50%",
            minWidth: "auto",
            width: "50px",
            height: "50px",
            bgcolor: "primary.main",
            color: "white",
            boxShadow: 3,
            "&:hover": { bgcolor: "primary.dark" }
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </Fade>

      {/* WhatsApp Button */}
      {/* <WhatsAppButton /> */}

    </Container>
  )
};

export default ProductsContainer;
