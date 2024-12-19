import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import ProductAccordion from "../../components/product/accordiam/ProductAccordion";
import AboutusAccordion from "../../components/product/accordiam/AboutusAccordion";
import CarouselContainer from "../../components/home/crousel/CarouselContainer";
import { useRef, useState } from "react";
import CEOImage from "../../../public/product.jpg"; // Example path to CEO's image
import WarehouseCarousel from "./WarehouseCarousel"; // Create this component for warehouse images
import image1 from "../../../public/product.jpg"; 
import image2 from "../../../public/new-logo.png"; 
import image3 from "../../../public/logo.png"; 
import image4 from "../../../public/product.jpg"; 
import image5 from "../../../public/new-logo.png"; 

const images = [
  "https://5.imimg.com/data5/SELLER/Default/2022/5/PW/BL/IM/67795200/whatsapp-image-2022-05-21-at-6-37-07-pm-1--1000x1000.jpeg",
  "https://5.imimg.com/data5/SELLER/Default/2022/5/AZ/RV/BY/67795200/whatsapp-image-2022-05-21-at-6-37-07-pm-3--1000x1000.jpeg", 
  "https://5.imimg.com/data5/SELLER/Default/2022/5/NK/WE/HV/67795200/67795200-location-1652952448000-1000x1000.jpg", 
  "https://5.imimg.com/data5/SELLER/Default/2022/5/PW/BL/IM/67795200/whatsapp-image-2022-05-21-at-6-37-07-pm-1--1000x1000.jpeg", 
  "https://5.imimg.com/data5/SELLER/Default/2022/5/AZ/RV/BY/67795200/whatsapp-image-2022-05-21-at-6-37-07-pm-3--1000x1000.jpeg"
];

function About() {
  const [selectedProduct, setSelectedProduct] = useState({ category: "", productId: null });
  const categoryRefs = useRef({});
  const scrollToCategory = (category) => {
    categoryRefs.current[category]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Grid container spacing={3}>
        
        {/* Sidebar Accordion */}
        <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <Box sx={{ position: 'sticky', top: '0px', mt: 2 }}>
            <AboutusAccordion />
            <ProductAccordion scrollToCategory={scrollToCategory} setSelectedProduct={setSelectedProduct} isCalledFromAbout={true} />
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} sm={8} md={9}>
          
          {/* Carousel Section for products  */}
          <CarouselContainer  autoPlay interval={1000} /> 

          <Divider sx={{ my: 3 }} />

          {/* Overview */}
          <Box>
            <Typography variant="h5" gutterBottom>Sinnchem Life Sciences (OPC) Private Limited</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Established in 2021, we are a leading manufacturer of Industrial Chemicals. As a contract research and manufacturing organization, Sinnchem Life Sciences supports R&D programs from lead generation to clinical studies, providing support for fine chemicals, APIs, and more. We are committed to client satisfaction, quality, safety, and ethical practices.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          
          {/* Carousel Section for Warehouse Images */}
          <WarehouseCarousel autoPlay  images={images} interval={2000} /> {/* Set this up to display warehouse images */}

          <Divider sx={{ my: 3 }} />

          {/* Vision */}
          <Box>
            <Typography variant="h5" gutterBottom>Our Vision</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              We aim to achieve high customer satisfaction through exceptional service in custom synthesis and manufacturing.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Mission */}
          <Box>
            <Typography variant="h5" gutterBottom>Our Mission</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              We are committed to providing innovative and cost-effective solutions in a timely manner.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* CEO's Message */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" gap={2}>
            <Box component="img" src={"https://www.sinnchem.com/media/product/images/CEO_picture_BmWXkzW.PNG"} alt="CEO Image" sx={{ width: { xs: '100%', md: '150px' }, borderRadius: '50%' }} />
            <Box>
              <Typography variant="h5" gutterBottom>CEO's Message</Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                At Sinnchem Life Sciences, we are committed to delivering quality services and building lasting partnerships. Our team’s passion and dedication are the driving forces behind our success, as we strive to make a global impact. Our focus on health, safety, and ethical practices ensures a sustainable future.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Why Us */}
          <Box>
            <Typography variant="h5" gutterBottom>Why Us?</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              We ensure cost-effectiveness, product quality, confidentiality of research, and timely delivery.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Health and Safety */}
          <Box>
            <Typography variant="h5" gutterBottom>Health and Safety</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Health and Safety are core values at Sinnchem Life Sciences, as we strive for "Zero Harm". Our practices are designed to ensure the well-being of employees, partners, and the community.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
