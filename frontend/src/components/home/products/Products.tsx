import { Box, Container, Grid, Typography } from "@mui/material";
import CustomCard from "../../card/Card";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateCategoryDetails } from "../../../redux/reducer/ProductsReducer";
import { useEffect } from "react";

function Products() {
  const products = useAppSelector((state) => state.products.products);
  // console.log("products", products)

  const storedCategoryDetails = useAppSelector(
    (state) => state.products.categoryDetails
  );

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

  useEffect(() => {
    dispatch(updateCategoryDetails(categoryDetails));
  }, []);

  // console.log("storedCategoryDetails", storedCategoryDetails)

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography
          variant="h5"
          marginTop={"3rem"}
          marginBottom={"2rem"}
          textAlign="center"
        >
          Our Products Category
        </Typography>

        <Grid container rowSpacing={1}>
          {storedCategoryDetails.map((item) => {
            // console.log("item", item)
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={2.4}
                // lg={2.4}
                key={item.category}
                sx={{
                  // display: "flex",
                  // justifyContent: "flex-end", // Center on mobile, left-align on larger screens
                  // gap: '1rem',
                  p: '1rem',
                  m: '0 auto'
                  // border: '1px solid red'
                  // alignItems: 'center'
                }}
              >
                <CustomCard
                  productId={item.products[0].id}
                  category={item.products[0].category}
                  productName={item.category}
                  productImage={item.products[0].images[0]}
                  btnText={"View Details"}
                  btnClass={"text"}
                  productsCount={item.count}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default Products;
