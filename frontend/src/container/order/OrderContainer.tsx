import { Box, Container, Grid } from "@mui/material";
import LoginDetails from "../../components/order/LoginDetails";
import DeliveryAddress from "../../components/order/DeliveryAddress";
import OrderSummary from "../../components/order/OrderSummary";
import PaymentOptions from "../../components/order/PaymentOptions";
import PriceDetails from "../../components/order/PriceDetails";

function OrderContainer() {
  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={2} sx={{mt: '1rem', mb: '1rem',}}>
        <Grid item xs={12} sm={6} md={8}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <LoginDetails />
            <DeliveryAddress />
            <OrderSummary />
            <PaymentOptions />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <PriceDetails />
        </Grid>
      </Grid>
    </Container>
  );
}

export default OrderContainer;
