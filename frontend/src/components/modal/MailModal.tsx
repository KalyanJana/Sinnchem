import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import { useAppSelector } from "../../redux/hooks";
import axios from "../../config/axiosConfig"; // Ensure axios is imported

function EmailModal({ open, handleClose }) {
  const products = useAppSelector((state) => state.products.products);
  const [email, setEmail] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleProductChange = (productName) => {
    setSelectedProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((item) => item !== productName)
        : [...prev, productName]
    );
  };

  const handleRemoveChip = (productName) => {
    setSelectedProducts((prev) => prev.filter((item) => item !== productName));
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast.error("Email cannot be blank", { position: "bottom-center" });
      return;
    }

    if (!selectedProducts.length) {
      toast.error("Please select at least one product", { position: "bottom-center" });
      return;
    }

    setLoading(true); // Start loading spinner

    const formData = {
      subject: `${email} : queries`,
      text: selectedProducts,
    };

    try {
      const response = await axios.post("/api/v1/products/send-mail", formData);
      if (response.data.message) {
        toast.success(response.data.message, { position: "bottom-center" });
      }

      // Clear form after successful submission
      setEmail("");
      setSelectedProducts([]);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again.",
        { position: "bottom-center" }
      );
    } finally {
      setLoading(false); // Stop loading spinner
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Send Email
      </DialogTitle>
      <DialogContent dividers>
        {/* Email Input */}
        <Box sx={{ marginBottom: 3 }}>
          <TextField
            fullWidth
            label="Your Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Box>

        {/* Product Selection */}
        <Box sx={{ marginBottom: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="product-select-label">Select Products</InputLabel>
            <Select
              labelId="product-select-label"
              renderValue={() => "Select Products"}
              MenuProps={{
                PaperProps: {
                  style: { maxHeight: 300 },
                },
              }}
            >
              {products.map((product) => (
                <MenuItem key={product._id} value={product.name}>
                  <Checkbox
                    checked={selectedProducts.includes(product.name)}
                    onChange={() => handleProductChange(product.name)}
                  />
                  <ListItemText primary={product.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Selected Products */}
        <Box sx={{ marginBottom: 3 }}>
          {selectedProducts.length > 0 && (
            <>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Selected Products:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {selectedProducts.map((productName) => (
                  <Chip
                    key={productName}
                    label={productName}
                    onDelete={() => handleRemoveChip(productName)}
                    sx={{ backgroundColor: "#f1f1f1" }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>

        {/* Company Details */}
        <Box
          sx={{
            padding: 2,
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#fafafa",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Company Details:
          </Typography>
          <Typography variant="body2">
            Sinnchem Life Sciences (OPC) Private Limited
          </Typography>
          <Typography variant="body2">
            Flat No. 102, Block G, Gulmohar Gardens, Shakti Sri Nagar, Mallapur,
            Hyderabad - 500076, Telangana, India
          </Typography>
          <Typography variant="body2">Contact: +91 8047660154</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          startIcon={loading && <CircularProgress size={16} />}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmailModal;
