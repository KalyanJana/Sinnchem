import { Box, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import { Link } from "react-router-dom";


function ButtonContainer() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem',}}>
      <Button variant="contained" sx={{width: '48%', height: '100%'}}>
        <ShoppingCartOutlinedIcon sx={{ marginRight: "0.5rem" }} /> ADD TO CART
      </Button>
      <Button variant="outlined" component={Link} to={"/order"} sx={{width: '48%', height: '100%'}}>
        <FlashOnOutlinedIcon sx={{ marginRight: "0.5rem" }} /> BUY NOW
      </Button>
    </Box>
  );
}

export default ButtonContainer;
