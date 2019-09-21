import React from "react"
import "./Products.css"
// import FiberCement from "./GypsumBoards/FiberCement"
// import FireResistant from "./GypsumBoards/FireResistant"
// import MoistureResistant from "./GypsumBoards/MoistureResistant"
// import Impact from "./GypsumBoards/Impact"
// import MFR from "./GypsumBoards/MFR"
// import RegularBoards from "./GypsumBoards/RegularBoards"
import Tiles from "./Tiles/Tiles"
import StatsAnimation from "../StatsAnimation/StatsAnimation"
// import Premium from "./GypsumBoards/Premium"
// import Convex from "./Plaster/Convex"
// import Elite from "./Plaster/Elite"
// import Stucco from "./Plaster/Stucco"

const Products = () => {
  return (
    <section id="products">
      <h2>Products</h2>
      <Tiles />
      {/* <RegularBoards /> */}
      {/* <Stucco /> */}
      {/* <Elite /> */}
      {/* <Convex /> */}
      {/* <FiberCement /> */}
      {/* <Premium /> */}
      {/* <MoistureResistant /> */}
      {/* <MFR /> */}
      {/* <FireResistant /> */}
      {/* <Impact /> */}
      <h3>Wide Range of Available Products</h3>
      <StatsAnimation />
      {/* add classification here */}
    </section>
  )
}

export default Products
