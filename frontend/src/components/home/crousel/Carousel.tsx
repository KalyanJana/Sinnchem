import React from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomCard from "../../card/Card";
import { Category } from "@mui/icons-material";

const Carousel = ({
  cardWidth,
  currentIndex,
  items,
  handlePrevClick,
  handleNextClick,
}) => {
  const gapInPercent = 1.2; // Gap between items in percentage
  const adjustedCardWidth = cardWidth - gapInPercent / items.length; // Adjusted card width to account for gaps
  // console.log("adjustedCardWidth", adjustedCardWidth)
  // console.log("carousel item", items);
  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden",}}>
      {/* Previous Button */}
      <IconButton
        onClick={handlePrevClick}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Carousel Items */}
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${
            currentIndex * (adjustedCardWidth + gapInPercent)
          }%)`,
          gap: `${gapInPercent}%`, // Gap between cards in percentage
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {items.map((item) => (
          <Box
            key={item._id}
            sx={{
              flex: `0 0 ${adjustedCardWidth}%`,
              boxSizing: "border-box",
              pt: "1rem",
              pb: "1rem",
            }}
          >
            <CustomCard 
              productId ={item._id}
              category = {item.category}
              productName={item.name}
              productImage={item.images[0]}
              btnText={"Get Best Quote"}
            />
          </Box>
        ))}
      </Box>

      {/* Next Button */}
      <IconButton
        onClick={handleNextClick}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
