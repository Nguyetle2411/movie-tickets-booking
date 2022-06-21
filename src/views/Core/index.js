import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb4226'
    }
  }
})

export default function Core() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}
