import React, { Fragment } from "react"
import "./Navbar.css"
import { Link } from "gatsby"
const sidebarNav = document.getElementById("sidebar-nav")

const Navbar = ({ siteName }) => {
  const wideNav = document.getElementById("wide-nav")
  const handleSidebar = () => {
    console.log(sidebarNav)
    console.log("sidebar opened!")
    // wideNav.style.display = "none"
    sidebarNav.classList.toggle("active")
  }
  // const closeSidebar = () => {
  //   console.log("sidebar closed!")
  // }
  return (
    // <Fragment>
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
        id="wide-nav"
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
        <li className="nav-link" style={{ marginBottom: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li className="nav-link" style={{ marginBottom: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Products
          </Link>
        </li>
        <li className="nav-link" style={{ marginBottom: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </li>
        <li className="nav-link" style={{ marginBottom: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Contact
          </Link>
        </li>
      </ul>
      <button id="nav-toggle" onClick={handleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <div id="sidebar-nav">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Products
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          About
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Contact
        </Link>
      </div>
    </nav>
    //</Fragment>
  )
}

export default Navbar
