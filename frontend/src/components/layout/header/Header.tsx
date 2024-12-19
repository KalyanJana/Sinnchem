import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GavelIcon from "@mui/icons-material/Gavel";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Link, useNavigate } from "react-router-dom";
import newLogo from "../../../assets/Image/new-logo.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { List, ListItem, Stack } from "@mui/material";
import { updateProductIdAndCategory } from "../../../redux/reducer/ProductsReducer";
import CloseIcon from "@mui/icons-material/Close";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const pages = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "Our Products", path: "/products" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Contact Us", path: "/contact" },
];

export function Header() {
  const [searchValue, setSearchValue] = React.useState("");
  const products = useAppSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function searchChangeHandler(e) {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }

  function clickHandler(category, productId) {
    setSearchValue("");
    setFilteredProducts([]);
    dispatch(updateProductIdAndCategory({ category, productId }));
    navigate("/products");
  }

  const [showInfoBox, setShowInfoBox] = React.useState(true);

  function handleCloseInfoBox() {
    setShowInfoBox(false);
  }
  return (
    <>
      {/* Company Information Banner */}
      {showInfoBox && (
        <Box
          sx={{
            bgcolor: "#3f51b5",
            color: "white",
            py: 1,
            px: 2,
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            sx={{ flexWrap: "wrap" }}
          >
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Mallapur, Hyderabad, Telangana
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <GavelIcon sx={{ mr: 1 }} />
              <Typography variant="body2">GST: 36ABFCS9022H1Z8</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <VerifiedIcon sx={{ mr: 1, color: "gold" }} />
              <Typography variant="body2">Verified Supplier</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <StarIcon sx={{ mr: 1, color: "gold" }} />
              <Typography variant="body2">Rating: 3.5/5</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">info@sinnchem.com</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+91 9850498435</Typography>
            </Box>
            {/* Close button for the info box */}
            <IconButton
              onClick={handleCloseInfoBox}
              size="small"
              sx={{ color: "white", ml: 2 }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>
      )}

      {/* Header with AppBar */}
      <AppBar position="static"  sx={{p: '0.3rem 0'}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{justifyContent: {xs: 'space-between'}}}>
            <Box
              component={Link}
              to="/"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Box
                component="img"
                sx={{ height: "50px", width: "100px", borderRadius: "50%" }}
                src={newLogo}
              />
            </Box>

            {/* Hamburger menu for smaller screens */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" },}}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link
                      to={page.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo for smaller screens */}
            <Box
              component={Link}
              to="/"
              sx={{ display: { xs: "flex", md: "none" }, mr: '3rem',}}
            >
              <Box
                component="img"
                sx={{ height: "50px", width: "100px", borderRadius: "50%" }}
                src={newLogo}
              />
            </Box>

            {/* Desktop navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  sx={{ my: 2, color: "white" }}
                  component={Link}
                  to={page.path}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Search Box */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: "200px", sm: "300px" },
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  value={searchValue}
                  onChange={searchChangeHandler}
                />
              </Search>
              {filteredProducts.length > 0 && (
                <Paper
                  sx={{
                    position: "absolute",
                    top: "55px",
                    width: "100%",
                    maxHeight: "300px",
                    zIndex: 1,
                    overflowY: "auto",
                  }}
                >
                  <List>
                    {filteredProducts.map((product) => (
                      <ListItem
                        key={product.id}
                        button
                        onClick={() =>
                          clickHandler(product.category, product.id)
                        }
                      >
                        {product.name}
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;