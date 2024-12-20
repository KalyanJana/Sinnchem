import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  Paper,
  Divider,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "../../config/axiosConfig.js";

const countryPhoneData = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Germany", code: "+49" },
];

const ProductInquiryModal = ({ open, onClose, product }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    code: "+91",
  });
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(product.defaultQuantity || 1);
  const [unit, setUnit] = useState("kg");
  const [editQuantity, setEditQuantity] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    setCountries(countryPhoneData);
    const defaultCountry = countryPhoneData.find((c) => c.name === "India");
    if (defaultCountry) setSelectedCountry(defaultCountry);
  }, []);

  const validateForm = () => {
    if (!mobileNo.trim()) {
      toast.error("Mobile number cannot be empty.", { position: "bottom-center" });
      return false;
    }
    if (selectedCountry.code === "+91" && !/^\d{10}$/.test(mobileNo)) {
      toast.error("Please enter a valid 10-digit mobile number for India.", {
        position: "bottom-center",
      });
      return false;
    }
    if (!address.trim()) {
      toast.error("Address cannot be empty.", { position: "bottom-center" });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true); // Start loading

    const formData = {
      subject: `${mobileNo} : queries`,
      text: {
        productName: product.name,
        casNo: product.cas,
        price: product.price,
        quantity,
        unit,
        countryName: selectedCountry.name,
        phoneCode: selectedCountry.code,
        mobileNo,
        address,
      },
    };

    try {
      const response = await axios.post("/api/v1/products/send-mail", formData);
      if (response.data.message) {
        toast.success(response.data.message, { position: "bottom-center" });
      }
      onClose(); // Close the modal on successful submission
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again.",
        { position: "bottom-center" }
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Paper
         sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: "80%",
            md: 500,
          },
          maxHeight: "90vh",
          overflowY: "auto",
          p: 3,
          outline: "none",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Product Inquiry
        </Typography>
        <Divider />

        {/* Product Details */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            <b>Product Name:</b> {product.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>CAS No:</b> {product.cas}
          </Typography>
          {product?.price && (
            <Typography variant="subtitle1" gutterBottom>
              <b>Price:</b> ₹{product.price}
            </Typography>
          )}

          <Box display="flex" alignItems="center" sx={{ gap: 1, mt: 1 }}>
            <Typography variant="subtitle1">
              <b>Quantity:</b> {quantity} {unit}
            </Typography>
            <Button size="small" variant="outlined" onClick={() => setEditQuantity(!editQuantity)}>
              {editQuantity ? "Save" : "Edit"}
            </Button>
          </Box>
          {editQuantity && (
            <Box display="flex" gap={1} sx={{ mt: 1 }}>
              <TextField
                label="Quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                size="small"
              />
              <TextField
                select
                label="Unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                size="small"
              >
                <MenuItem value="kg">kg</MenuItem>
                <MenuItem value="gm">gm</MenuItem>
              </TextField>
            </Box>
          )}
        </Box>

        <Divider sx={{ mt: 3, mb: 2 }} />

        {/* User Details */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Your Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={1}>
                <TextField
                  select
                  label="Code"
                  value={selectedCountry.code}
                  size="small"
                  sx={{ width: "30%" }}
                  onChange={(e) =>
                    setSelectedCountry((prev) => ({
                      ...prev,
                      code: e.target.value,
                    }))
                  }
                >
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.code}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Mobile Number *"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  type="tel"
                  fullWidth
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={address}
                label="Address"
                multiline
                rows={2}
                fullWidth
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={0}>
                <Typography>Your Country is&nbsp;</Typography>
                <TextField
                  select
                  size="small"
                  value={selectedCountry.name}
                  onChange={(e) => {
                    const selected = countries.find((c) => c.name === e.target.value);
                    setSelectedCountry(selected || { name: "", code: "" });
                  }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    "& .MuiSelect-select": {
                      padding: 0,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.name} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ProductInquiryModal;
