import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TurnRightOutlinedIcon from "@mui/icons-material/TurnRightOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import { toast } from "react-toastify";
import EmailModal from "../../modal/MailModal";
import axios from "../../../config/axiosConfig";

const initalFormData = {
  mobileNo: "",
  requirementDetails: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initalFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { mobileNo, requirementDetails } = formData;

    if (!mobileNo.trim()) {
      toast.error("Mobile number cannot be blank", { position: "bottom-center" });
      return false;
    }

    if (mobileNo.length !== 10 || !/^[\d]+$/.test(mobileNo)) {
      toast.error("Mobile number must be exactly 10 digits", { position: "bottom-center" });
      return false;
    }

    if (!requirementDetails.trim()) {
      toast.error("Requirement details cannot be blank", { position: "bottom-center" });
      return false;
    }

    return true;
  };

  const submitHandler = async () => {
    if (!validateForm()) return;

    const bodyData = {
      subject: `${formData.mobileNo} : queries`,
      text: formData,
    };

    try {
      const response = await axios.post("/api/v1/products/send-mail", bodyData);
      setFormData(initalFormData);
      if (response.data.message) {
        toast.success(response.data.message, { position: "bottom-center" });
      }
    } catch (error) {
      setFormData(initalFormData);
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again.",
        { position: "bottom-center" }
      );
    }
  };

  const handleWhatsAppRedirect = () => {
    const phone = `91${import.meta.env.VITE_WHATSHAP_MOBILE_NUMBER}`;
    const text = "Hi";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleGetDirections = () => {
      const locationUrl = import.meta.env.VITE_COMPANY_LOCATION_URL;
      window.open(locationUrl, "_blank");  
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sm={7}
        md={5}
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <Typography variant="h5">Reach Us</Typography>

        <Box display="flex" alignItems="center">
          <IconButton>
            <LocationOnOutlinedIcon />
          </IconButton>
          <Typography variant="h6">
            Sinnchem Life Sciences (OPC) Private Limited
          </Typography>
        </Box>

        <Box sx={{ marginLeft: 5 }}>
          <Typography variant="body2">
            Plot No 119/5, Phase-2, IDA Cherlaplly, 
            Hyderabad - 500051, Telangana, India
          </Typography>
          <Button onClick={handleGetDirections} variant="text" color="primary" sx={{ mt: 1 }}>
            <TurnRightOutlinedIcon fontSize="small" /> Get Directions
          </Button>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton>
            <PermIdentityOutlinedIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Nirmal Jana (Medium Enterprise)
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton>
            <CallOutlinedIcon />
          </IconButton>
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" sx={{ marginLeft: 1, color: "#1976d2", fontWeight: "bold" }}>
              {`Call : +91 ${import.meta.env.VITE_CALL_MOBILE_NUMBER}`}
            </Typography>
            <Typography
              variant="body2"
              fontSize="small"
              sx={{ marginLeft: 1, color: "#4caf50" }}
            >
              70% Call Response Rate
            </Typography>
          </Box>
        </Box>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
            mt: "1rem",
          }}
        >
          <Button variant="contained" onClick={handleOpenModal}>
            <EmailOutlinedIcon sx={{ marginRight: "0.5rem" }} /> Send Email
          </Button>
          <EmailModal
            open={isModalOpen}
            handleClose={handleCloseModal}
            userEmail="example@domain.com"
          />
          <Button variant="outlined" onClick={handleWhatsAppRedirect}>
            <WhatsAppIcon sx={{ marginRight: "0.5rem", color: "#25D366" }} /> Chat on WhatsApp
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            marginBottom: "1rem",
            height: "500px",
            width: "fit-content",
            margin: { xs: "1rem auto", md: "0rem auto 1rem auto" },
          }}
        >
          <Typography variant="h5">Leave a Message, We will call you back!</Typography>
          <TextField
            name="mobileNo"
            label="Mobile Number"
            placeholder="Enter your mobile"
            id="outlined-start-adornment"
            value={formData.mobileNo}
            onChange={changeHandler}
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            }}
          />
          <TextField
            name="requirementDetails"
            label="Requirement Details"
            placeholder="Additional details about your requirements..."
            id="outlined-multiline-static"
            multiline
            value={formData.requirementDetails}
            onChange={changeHandler}
            rows={4}
          />
          <Button
            variant="contained"
            sx={{ margin: "0 auto" }}
            onClick={submitHandler}
          >
            Submit Requirement
          </Button>
        </Card>
      </Grid>
    </>
  );
}

export default ContactForm;
