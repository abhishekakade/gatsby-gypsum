import React from "react"
import "./Products.css"
import FiberCement from "./Boards/FiberCement"
// import FireResistant from "./Boards/FireResistant"
// import MoistureResistant from "./Boards/MoistureResistant"
// import Impact from "./Boards/Impact"
// import MFR from "./Boards/MFR"
// import PlasterBoards from "./Boards/PlasterBoards"

// import Premium from "./Boards/Premium"
// import Convex from "./Plaster/Convex"
import Elite from "./Plaster/Elite"
import Stucco from "./Plaster/Stucco"

const Products = () => {
  return (
    <section id="products">
      <h2>Products</h2>
      {/* <PlasterBoards /> */}
      <Stucco />
      <Elite />
      {/* <Convex /> */}
      {/* <FiberCement /> */}
      {/* <Premium /> */}
      {/* <MoistureResistant /> */}
      {/* <MFR /> */}
      {/* <FireResistant /> */}
      {/* <Impact /> */}
    </section>
  )
}

export default Products
