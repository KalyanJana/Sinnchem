import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Sitemap(){
    return(
        <>
            <Typography variant="h5">Our Company</Typography>
            <Button component={Link} to={"/about"}>About Us</Button>
            <Button component={Link} to={"/products"}>Out Products</Button>
            <Button component={Link} to={"/contact"}>Contact Us</Button>
            <Button>Download Brochure</Button>
        </>
    )
}

export default Sitemap;