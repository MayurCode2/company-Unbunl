import { useState,useContext } from 'react'
import { ProductsContext } from './context/ProductContext'
import './App.css'
import CustomPackBuilder from './CustomPackBuilder'
import Navbar from './components/Navbar'
function App() {
const {product}=useContext(ProductsContext)
console.log(product)

const handleQuntity=()=>{
  i
}
  return (
    <>
    <Navbar/>
    <CustomPackBuilder/>
    </>
  )
}

export default App
