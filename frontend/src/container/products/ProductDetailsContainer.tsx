import { Box, Container, Grid } from "@mui/material";
import ImageContainer from "../../components/product/Details/ImageContainer";
import ButtonContainer from "../../components/product/Details/ButtonContainer";
import DescribeContainer from "../../components/product/Details/DescribeContainer";

function ProductDetailsContainer() {
  return (
<Container maxWidth="lg">
  <Grid container spacing={3}>
    <Grid
          item
          sm={6}
          md={5}
          sx={{
            display: { xs: "none", sm: "block" }, 
            position: { sm: "sticky" },
            top: 0, // Stick to the top
            height: "90vh", // Full viewport height for sticky sidebar
            display: "flex",
            flexDirection: "column",
            gap: '1rem',
            pb: '1rem',
            mt: '1em'
          }}
        >
          <Box sx={{flex: 1, height: "90%"}}>
            <ImageContainer />
          </Box>
          <Box sx={{display: { xs: "none", sm: "block" },}} >
            <ButtonContainer />
          </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={7}>
      <DescribeContainer />
    </Grid>

    {/* ButtonContainer fixed at the bottom for mobile only */}
    <Grid
      item
      xs={12}
      sx={{
        display: { xs: "block", sm: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw", // Take full width at the bottom
        height: '100px',
        zIndex: 999,
        backgroundColor: "white", // Ensure it's visible
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", // Add shadow for better visibility
      }}
    >
      <ButtonContainer />
    </Grid>

  </Grid>
</Container>

  );
}

export default ProductDetailsContainer;
