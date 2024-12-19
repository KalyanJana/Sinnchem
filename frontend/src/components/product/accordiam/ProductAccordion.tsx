import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Category } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { updateCategoryDetails, updateProductIdAndCategory } from "../../../redux/reducer/ProductsReducer";

function ProductAccordion({scrollToCategory, setSelectedProduct, isCalledFromAbout=false}) {
  
  const products = useAppSelector((state) => state.products.products);

  const storedCategoryDetails = useAppSelector(
    (state) => state.products.categoryDetails
  );
  const [expandedCategory, setExpandedCategory] = React.useState(null);

  const dispatch = useAppDispatch();

  //converting products to category wise 
  const categoryDetails = Object.values(
    products.reduce((acc, product) => {
      const { category } = product;

      if (!acc[category]) {
        acc[category] = {
          category,
          count: 0,
          products: [],
        };
      }
      acc[category].count += 1;
      acc[category].products.push(product);

      return acc;
    }, {})
  );

  React.useEffect(() => {
    dispatch(updateCategoryDetails(categoryDetails));
  }, []);


  const currentProductId = useAppSelector(state => state.products.currentProductId)
  const currentCategory = useAppSelector(state => state.products.currentCategory)

  React.useEffect(()=>{
    if(currentCategory){
      setExpandedCategory(currentCategory)
      scrollToCategory(currentCategory)
    }
    setSelectedProduct({ category: currentCategory, productId: currentProductId  });
  }, [currentProductId, currentCategory])

  const handleAccordionChange = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
    scrollToCategory(category)
  };

  const navigate = useNavigate()

  function changeHandler(productId, category) {
    setSelectedProduct({ category, productId });
    // const upatatedCategoryDetials = [
    //   ...storedCategoryDetails.filter((item) => item.category === category),
    //   ...storedCategoryDetails.filter((item) => item.category != category),
    // ];
    // dispatch(updateCategoryDetails(upatatedCategoryDetials));

    if(isCalledFromAbout){
      dispatch(updateProductIdAndCategory({category: category, productId: productId}));
    }
    
  }

  return (
    <div>
      <Typography
        variant="p"
        component={Paper}
        sx={{ bgcolor: "lightgray", fontWeight: "500", p: "1rem", fontSize: '1rem' }}
      >
        Our Products
      </Typography>
      {storedCategoryDetails.map((categoryItem) => {
        return (
          <Accordion
            key={categoryItem.category}
            expanded={expandedCategory === categoryItem.category}
            onChange={() => handleAccordionChange(categoryItem.category)}
          >
            {/* <Accordion defaultExpanded> */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${categoryItem.category}-content`}
              id={`${categoryItem.category}-header`}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {categoryItem.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {categoryItem.count} products available
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {categoryItem.products.map((product) => (
                <Typography
                  key={product._id}
                  variant="body2"
                  sx={{ mb: "1rem" }}
                >
                  <Link
                    component="button"
                    variant="body2"
                    // onClick={() => navigate(`/product/${product.id}`)}
                    to={isCalledFromAbout ? "/products": ""}
                    onClick={() =>
                      changeHandler(product.id, categoryItem.category)
                    }
                    // color="primary"
                    underline="hover"
                  >
                    {product.name}
                  </Link>
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default ProductAccordion;
