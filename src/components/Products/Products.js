import React from "react"
import "./Products.css"
import FiberCement from "./Boards/FiberCement"
import FireResistant from "./Boards/FireResistant"
import MoistureResistant from "./Boards/MoistureResistant"
import Impact from "./Boards/Impact"
import MFR from "./Boards/MFR"
const Products = () => {
  return (
    <section id="products">
      <h2>Products</h2>
      {/* <FiberCement /> */}
      <MoistureResistant />
      <MFR />
      {/* <FireResistant /> */}
      {/* <Impact /> */}
    </section>
  )
}

export default Products
