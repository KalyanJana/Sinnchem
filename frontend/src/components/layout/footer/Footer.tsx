import { AppBar, Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar position="static" component="footer" sx={{ bgcolor: 'primary.main', mt: 'auto' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: 3,
            textAlign: 'center',
            color: 'white',
          }}
        >
          {/* Top Row with Company Details and Links */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="h6">Sinnchem Life Science</Typography>
              {/* <Typography variant="body2">123 Business St., City, Country</Typography> */}
              <Typography variant="body2">Flat-102, Block G, Gulmohar Gardens, Shakti Sri Nagar,</Typography>
              <Typography variant="body2">Mallapur, Hyderabad-500076, Telangana, India</Typography>
              <Typography variant="body2">Email: info@sinnchem.com</Typography>
              <Typography variant="body2">{`Phone: +91 ${import.meta.env.VITE_CALL_MOBILE_NUMBER}`}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="h6">Quick Links</Typography>
              <MuiLink component={RouterLink} to="/about" sx={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }} >
                About Us
              </MuiLink><br />
              <MuiLink component={RouterLink} to="/privacy" sx={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }} >
                Privacy Policy
              </MuiLink><br />
              <MuiLink component={RouterLink} to="/terms" sx={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }} >
                Terms of Service
              </MuiLink><br />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="h6">Follow Us</Typography>
              <Box>
                <IconButton color="inherit" href="https://facebook.com" target="_blank">
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com" target="_blank">
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit" href="https://instagram.com" target="_blank">
                  <Instagram />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Row with Copyright */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            &copy; {new Date().getFullYear()} Sinnchem Life Science Pvt Ltd. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
