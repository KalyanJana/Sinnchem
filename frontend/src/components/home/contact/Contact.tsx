import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TurnRightOutlinedIcon from "@mui/icons-material/TurnRightOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import Sitemap from "./Sitemap";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} sx={{ mt: "3rem"}}>
        <Grid item xs={12} sm={5} md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Sitemap />
        </Grid>
        <ContactForm />
      </Grid>
    </Container>
  );
}

export default Contact;
