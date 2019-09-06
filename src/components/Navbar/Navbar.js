import React from "react"
import "./Navbar.css"
import { Link } from "gatsby"

const Navbar = ({ siteName }) => (
  <nav
    style={{
      display: "flex",
    }}
  >
    <h1 style={{ margin: 0, fontSize: "1.25rem" }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteName}
      </Link>
    </h1>
    <ul
      style={{
        margin: "0 0 0 auto",
        width: "50%",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none",
        display: "flex",
        // background: "lightcoral",
        // marginLeft: "auto",
        fontFamily: "Lato, sans-serif",
        fontSize: "1.1rem",
        fontWeight: "bold",
        // fontFamily: "Raleway",
      }}
    >
      <li style={{ marginBottom: 0 }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </li>
      <li style={{ marginBottom: 0 }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Products
        </Link>
      </li>
      <li style={{ marginBottom: 0 }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          About
        </Link>
      </li>
      <li style={{ marginBottom: 0 }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
