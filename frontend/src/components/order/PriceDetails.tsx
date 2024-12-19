import { Box, Card, Grid, Typography } from "@mui/material";



function PriceDetails() {
  return (
    <Card >   
        <Typography variant="subtitle1" sx={{color: 'text.secondary', fontWeight: 'bold', borderBottom: '1px solid #ccc', p: '1rem'}}>PRICE DETAILS</Typography>

        <Box sx={{display: 'flex', justifyContent: 'space-between',m: '1rem'}}>
            <Typography variant="body1">Price (1 item)</Typography>
            <Typography variant="body1">$27,490</Typography>
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'space-between',m: '1rem', }}>
            <Typography variant="body1">Delivery Charges</Typography>
            <Typography variant="body1">
                <span style={{textDecoration: "line-through", marginRight: '0.3rem'}}>$40 </span><span style={{ color: 'green'}}>FREE</span>
            </Typography>
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'space-between',m: '1rem', borderTop: '1px dotted #ccc',pt: '1rem', fontWeight: 'bold'}}>
            <Typography variant="p" >Total Payable</Typography>
            <Typography variant="p">$27,490</Typography>
        </Box>


        <Typography variant="subtitle1" sx={{color: 'green', borderTop: '1px solid #ccc', p: '1rem'}}>Your Total Savings on this order $23,509 </Typography>
        
    </Card>
  );
}

export default PriceDetails;
