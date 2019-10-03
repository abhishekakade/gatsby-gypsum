import React from "react"
import "../components/Products/Products.css"

import Layout from "../components/layout"
import { Link } from "gatsby"

const Gypsum_Boards = () => {
  return (
    <Layout>
      <article
        className="product-details"
        style={{
          paddingTop: "4rem",
        }}
      >
        <section className="product-section">
          <h1 className="product-main-page-header">
            Plasterboards (Gypsum Boards)
          </h1>
          <h4 className="product-title">SIG - PlasterBoards</h4>

          <p className="product-intro">
            <strong>SIG - Plasterboards</strong> are ultimate wall and ceiling
            solutions for today's buildings, providing high levels of
            performance in terms of
            <em>
              &nbsp;fire rating, acoustic insulation, thermal insulation,
              moisture resistance and impact resistance.&nbsp;
            </em>
            Our Plasterboards are durable, easy-to-shape and cost-efficient, are
            flexible and lightweight; the most practical way of construction in
            today's and tomorrow's homes, offices, Hospitals and buildings.
          </p>

          <h5
            className="product-title"
            style={{
              fontSize: "1.35rem",
              color: "royalblue",
            }}
          >
            Products Available in PlasterBoards
          </h5>

          <ul>
            <li>
              <Link to="/products/Premium">Premium Gypsum Boards</Link>
            </li>
            <li>
              <Link to="/products/MoistureResistant">
                Moisture Resistant Gypsum Boards
              </Link>
            </li>
            <li>
              <Link to="/products/FireResistant">
                Fire Resistant Gypsum Boards
              </Link>
            </li>
            <li>
              <Link to="/products/MFR">
                Moisture & Fire Resistant Gypsum Boards
              </Link>
            </li>
            <li>
              <Link to="/products/Impact">Impact Gypsum Boards</Link>
            </li>
            <li>
              <Link to="/products/RegularBoards">Regular Gypsum Boards</Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default Gypsum_Boards
