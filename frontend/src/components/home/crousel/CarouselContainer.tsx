import React, { useState, useEffect, useRef } from 'react';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import Carousel from './Carousel'; 
import { useAppSelector } from '../../../redux/hooks';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const CarouselContainer = () => {

  const products = useAppSelector((state) => state.products.products);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('md'));


  // const itemsPerPage = isMobile ? 2 : isTablet ? 3 : 4;
  const itemsPerPage = isMobile ? 1 : isTablet ? 3 : 4;

  const [cardWidth, setCardWidth] = useState(0)

  useEffect(()=>{
    setCardWidth(96/itemsPerPage)
  }, [itemsPerPage])


  const [currentIndex, setCurrentIndex] = useState(0); //start with first product
  const [isForwardMove, setIsForwardMove] = useState(true);
  const intervalRef = useRef(null);

  const maxIndex = products.length - 1 - itemsPerPage;
  
  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => {
      if (currentIndex >= maxIndex) {
        setIsForwardMove(false);
      } else if (currentIndex <= 0) {
        setIsForwardMove(true);
      }

      setCurrentIndex((prevIndex) =>isForwardMove ? prevIndex + 1 : prevIndex - 1);
    }, 2000); 
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); 
  }, [currentIndex, isForwardMove]);

  // console.log("current Index",currentIndex)

  const handlePrevClick = () => {
    stopAutoSlide();
    // console.log("currentIndex",currentIndex)
    if(currentIndex == 0){
      startAutoSlide()
      return
    }
    setCurrentIndex(prev =>(prev - 1))
  };

  const handleNextClick = () => {
    stopAutoSlide();
    // console.log("currentIndex",currentIndex)
    if(currentIndex == maxIndex){
      startAutoSlide()
      return
    }
    setCurrentIndex(prev => (prev + 1))
  };

  return ( 
    <Container maxWidth='lg'>
        <Carousel
          cardWidth={cardWidth}
          currentIndex={currentIndex}
          items={products}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
    </Container>
  );
};

export default CarouselContainer;
