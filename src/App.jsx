import React from 'react'

import {Routes,Route, Navigate }from "react-router-dom"

import NavBar from './components/NavBar/NavBar'
import Home from './components/HomeRoute/Home'
import Cart from './components/Cart'
import PageNotFound from "./components/PageNotFound/PageNotFound"
import ProductDetails from './components/ProductDetails'
import PagenationProvider from './components/Context/PaginationContext'

function App() {
  
  return (
    <PagenationProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/home" element={<Navigate to="/" replace />} />  
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  </PagenationProvider>
  )
}

export default App
