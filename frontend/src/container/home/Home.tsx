import React from 'react'
import CarouselContainer from '../../components/home/crousel/CarouselContainer'
import About from '../../components/home/about/About'
import Products from '../../components/home/products/Products'
import RatingAndReview from '../../components/home/RatingAndReview/RatingAndReview'
import UsersRating from '../../components/home/RatingAndReview/UsersRating'
import Contact from '../../components/home/contact/Contact'
import { Box } from '@mui/material'
import WhatsAppButton from '../../components/Whatshap'

const Home = () => {
  return (
    <Box >
      <CarouselContainer />
      <About />
      <Products />
      {/* <RatingAndReview /> */}
      {/* <UsersRating /> */}
      <Contact />
      <WhatsAppButton />
    </Box>
  )
}

export default Home

