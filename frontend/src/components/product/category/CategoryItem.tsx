import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductItem from './ProductItem';
import { Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CategoryItem({category, selectedProduct}) {
  const [value, setValue] = React.useState(0);

  // When selectedProduct changes, update the active tab accordingly
  React.useEffect(() => {
    if (selectedProduct.category === category.category) {
      const productIndex = category.products.findIndex(product => product._id === selectedProduct.productId);
      console.log("Product", productIndex)
      if (productIndex !== -1) {
        setValue(productIndex); 
      }
    }
  }, [selectedProduct, category]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function extractName(prName){
    return prName.toUpperCase().split('CAS')[0]
  }

  return (
    <Box sx={{ width: '100%',}}>
      <Box sx={{position: 'sticky', top: '0px', zIndex: 1, backgroundColor: 'white', boxShadow: 1, paddingBottom: 1,
          }}>
        <Typography variant="h5" m={1} sx={{textAlign: {xs: 'center', }, pt:'1rem'}}>{category.category}</Typography>
        <Tabs 
          value={value}
          onChange={handleChange}
          aria-label="product tabs"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ minHeight: '48px',}}
          >
          {
            category.products.map((product, index)=>{
              return (
                <Tab  key={product._id} label={extractName(product.name)} {...a11yProps(index)} />
              )
            })
          }
        </Tabs>
      </Box>
      {
        category.products.map((product, index)=>{
          return (
            <CustomTabPanel key={product._id} value={value} index={index}>
              <ProductItem product={product}/>
            </CustomTabPanel>
          )
        })
      }
    </Box>
  );
}

export default CategoryItem;
