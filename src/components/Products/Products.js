import React from "react"
import { Link } from "gatsby"
import "./Products.css"

// import FiberCement from "./GypsumBoards/FiberCement"
// import FireResistant from "./GypsumBoards/FireResistant"
// import MoistureResistant from "./GypsumBoards/MoistureResistant"
// import Impact from "./GypsumBoards/Impact"
// import MFR from "./GypsumBoards/MFR"
// import RegularBoards from "./GypsumBoards/RegularBoards"
// import Tiles from "./Tiles/Tiles"
import StatsAnimation from "../StatsAnimation/StatsAnimation"
// import Premium from "./GypsumBoards/Premium"
// import Convex from "./Plaster/Convex"
// import Elite from "./Plaster/Elite"
// import Stucco from "./Plaster/Stucco"

const Products = () => {
  return (
    <section id="products">
      <h2>Products</h2>
      <section className="product-section">
        <h3>Wide Range of Available Products</h3>
        <ul id="products-list">
          <li className="GypsumBoards">
            <h4 className="main-product-title">
              Gypsum Boards / Plasterboards
            </h4>
            <p className="main-product-summary">
              SIG - Plasterboards are the ultimate wall and ceiling solutions
              for today's buildings...
            </p>
            <Link to="/Gypsum_Boards">
              <button className="main-product-button">Learn More</button>
            </Link>
          </li>

          <li className="FiberCement">
            <h4 className="main-product-title">Fiber Cement Boards</h4>
            <p className="main-product-summary">
              SIG - Fiber Cement Boards are made from natural cellulose fibers
              &amp; are fire-resistant and durable...
            </p>
            <Link to="/FiberCement">
              <button className="main-product-button">Learn More</button>
            </Link>
          </li>

          <li className="Plasters">
            <h4 className="main-product-title">Plasters</h4>
            <p className="main-product-summary">
              SIG - Plasters are made with 100% natural Gypsum, are easy to use,
              cost-effective, eco-friendly...
            </p>
            <Link to="/Plasters">
              <button className="main-product-button">Learn More</button>
            </Link>
          </li>

          <li className="Gypbond">
            <h4 className="main-product-title">Gypbond Pro</h4>
            <p className="main-product-summary">
              Gypbond Pro is a highly viscous solution which provides mechanical
              as well as chemical bonding...
            </p>
            <Link to="/Gypbond_Pro">
              <button className="main-product-button">Learn More</button>
            </Link>
          </li>

          <li className="Tiles">
            <h4 className="main-product-title">Tiles</h4>
            <p className="main-product-summary">
              SIG - Tiles are laminated with PVC film on the front side &amp;
              metalised polyester film on the backside...
            </p>
            <Link to="/Tiles">
              <button className="main-product-button">Learn More</button>
            </Link>
          </li>

          <li className="Metal">
            <h4 className="main-product-title">
              Metal Channels &amp; Accessories
            </h4>
            <p className="main-product-summary">
              We offer a large variety of metal ceiling channels and
              accessories...
            </p>
            <Link to="/Metal_Channels">
              <button className="main-product-button">Learn More</button>
            </Link>
          </li>
        </ul>
      </section>
      {/* <Tiles /> */}
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
      <StatsAnimation />
      {/* add classification here */}
    </section>
  )
}

export default Products
