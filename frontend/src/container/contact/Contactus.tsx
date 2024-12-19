import { Container, Grid } from "@mui/material";
import ContactForm from "../../components/home/contact/ContactForm";

function Contactus() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '70vh' }}>
      <Grid container spacing={3} sx={{ mt: "3rem" }}>
        <ContactForm />
      </Grid>
    </Container>
  );
}

export default Contactus;
