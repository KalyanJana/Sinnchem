import {
  Box,
  Button,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { Link } from "react-router-dom";

function createData(name: string, description: string) {
  return { name, description };
}

const rows = [
  createData("In The Box", "sdaghsdh adsfag a gasdgag asdg ashas ashdsdha"),
  createData("Model Name", "adash adsf ggggggggggggggggggggggg"),
  createData("Color", "black"),
  createData("Packaging Details", "20 kg drum"),
  createData("Purity %", "Greater than 99%"),
];

function ProductDetails({ product, handleModalOpen }) {
  // console.log("product", product);

  const productSpecificationArray = Object.entries(product?.specification);

  let productAdditionalInfoArray = [];

  if (
    product?.additionalInformation &&
    Object.keys(product?.additionalInformation).length > 0
  ) {
    productAdditionalInfoArray = Object.entries(product?.additionalInformation);
  }

  // console.log("productAdditionalInfoArray",productAdditionalInfoArray )
  const productDescription = product.description;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Breadcum  */}

      {/* product name  */}
      <Typography
        component="div"
        variant="body1"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        {product.name}
      </Typography>

      {/* product rating & reivew  */}

      {/* product price  */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="1rem"
      >
        {product?.price && (
          <Typography
            component="div"
            variant="body1"
            display="flex"
            alignItems="center"
            fontWeight={"bold"}
          >
            <CurrencyRupeeOutlinedIcon fontSize="small" /> {product.price}
          </Typography>
        )}

        <Button
          variant="text"
          sx={{ width: "100%", color: "blue" }}
          onClick={handleModalOpen}
        >
          {product?.price ? "Get Best Quote" : "Ask for price"}
        </Button>
      </Box>

      {/* product specification  */}
      <TableContainer
        component={Paper}
        sx={{ width: "100%", maxWidth: "600px", margin: "auto" }}
      >
        <Table
          aria-label="simple table"
          size="small"
          sx={{ borderCollapse: "collapse" }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", padding: "8px" }}>
                Specification{" "}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", padding: "8px" }}>
                {" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productSpecificationArray.map(([key, value], index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ padding: "8px" }}>
                  {key}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    padding: "8px",
                    maxHeight: "100px", // Adjust height as needed
                    maxWidth: "200px", // Adjust width as needed
                    overflowY: "auto",
                    whiteSpace: "normal", // Allow text to wrap
                    wordWrap: "break-word",
                  }}
                >
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* product description  */}
      <TableContainer
        component={Paper}
        sx={{ width: "100%", maxWidth: "600px", margin: "auto" }}
      >
        <Table
          aria-label="simple table"
          size="small"
          sx={{ borderCollapse: "collapse" }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", padding: "8px" }}>
                Description{" "}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", padding: "8px" }}>
                {" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ padding: "8px" }}>
                {productDescription}
              </TableCell>
              {/* <TableCell align="left" 
                sx={{ 
                  padding: '8px', 
                  maxHeight: '100px', // Adjust height as needed
                  maxWidth: '200px',  // Adjust width as needed
                  overflowY: 'auto',
                  whiteSpace: 'normal',  // Allow text to wrap
                  wordWrap: 'break-word', 
                }}
              >
                {row.description}
              </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* product additional information  */}
      {productAdditionalInfoArray.length > 0 && (
        <TableContainer
          component={Paper}
          sx={{ width: "100%", maxWidth: "600px", margin: "auto" }}
        >
          <Table
            aria-label="simple table"
            size="small"
            sx={{ borderCollapse: "collapse" }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", padding: "8px" }}>
                  Additiona Information{" "}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", padding: "8px" }}>
                  {" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productAdditionalInfoArray.map(([key, value], index) => (
                <TableRow
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ padding: "8px" }}>
                    {key}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      padding: "8px",
                      maxHeight: "100px", // Adjust height as needed
                      maxWidth: "200px", // Adjust width as needed
                      overflowY: "auto",
                      whiteSpace: "normal", // Allow text to wrap
                      wordWrap: "break-word",
                    }}
                  >
                    {value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* product ratings and Reviews  */}

      {/* Questions and answer  */}
    </Box>
  );
}

export default ProductDetails;
