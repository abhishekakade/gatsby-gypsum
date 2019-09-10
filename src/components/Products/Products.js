import React from "react"
import "./Products.css"
// import FiberCement from "./Boards/FiberCement"
import FireResistant from "./Boards/FireResistant"
import Impact from "./Boards/Impact"
const Products = () => {
  return (
    <section id="products">
      <h2>Products</h2>
      {/* <FiberCement /> */}
      <Impact />
      <FireResistant />
    </section>
  )
}

export default Products
