import React from 'react'
import { Header } from '../../components/layout/header/Header'
import { RoutesPath } from '../../routes/RoutesPath'
import { Footer } from '../../components/layout/footer/Footer'
import { Container } from '@mui/material'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <>
        <Header />
        <RoutesPath />
        <Footer />
        <ToastContainer />
    </>
  )
}
