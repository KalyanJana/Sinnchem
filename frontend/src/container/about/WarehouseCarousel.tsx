import React, { useState, useEffect, useRef } from "react";
import { Box, Card, CardMedia } from "@mui/material";

const WarehouseCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const transitionDuration = 500;

  // Start interval for automatic image rotation
  const startInterval = () => {
    clearExistingInterval();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  };

  // Clear the interval
  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => clearExistingInterval(); // Clear interval on component unmount
  }, [images.length, interval]);

  // Reset interval on manual change
  useEffect(() => {
    clearExistingInterval();
    startInterval();
  }, [currentIndex]);

  // Manually set the main image index on click
  const handleBoxClick = (index) => {
    setCurrentIndex(index);
  };

  // Define the class names for each position based on the current index
  const getPositionClass = (index) => {
    if (index === currentIndex) return "main";
    if (index === (currentIndex - 1 + images.length) % images.length) return "left";  // this +images.length is added while main img index is 0 then -1 is not there so add this to refer the last image.
    if (index === (currentIndex + 1) % images.length) return "right";
    return "hidden"; // Hide other images
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: 300,
          overflow: "hidden",
        //   border: '1px solid red'
        }}
      >
        {images.map((image, index) => (
          <Card
            key={index}
            className={getPositionClass(index)}
            sx={{
              width: "60%",
              height: "100%",
              position: "absolute",
              transition: `transform ${transitionDuration}ms ease, opacity ${transitionDuration}ms ease`,
              boxShadow: index === currentIndex
                ? "0px 8px 16px rgba(0, 0, 0, 0.5)" // Stronger shadow for main image
                : "0px 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for side images
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt={`Warehouse Image ${index + 1}`}
              sx={{ objectFit: "cover", height: "100%" }}
            />
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          mt: "2rem",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleBoxClick(index)}
            sx={{
              border: currentIndex === index ? "1.5px solid blue" : "1.5px solid gray",
              transition: "border 0.3s ease",
              borderRadius: "4px",
              width: "2rem",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>

      {/* Add styles to animate the images between left, center, and right */}
      <style jsx>{`
        .main {
          transform: translateX(0) scale(1);
          z-index: 2;
          opacity: 1;
        }
        .left {
          transform: translateX(-45%) scale(0.8);
          z-index: 1;
          opacity: 0.9;
        }
        .right {
          transform: translateX(45%) scale(0.8);
          z-index: 1;
          opacity: 0.9;
        }
        .hidden {
          display: none;
        }
      `}</style>
    </>
  );
};

export default WarehouseCarousel;
