import React from "react"
import "./Homepage.css"
const Homepage = () => {
  return (
    <ul
      className="carousel"
      style={{
        marginLeft: 0,
      }}
    >
      <li>
        <span>Image 01</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "left",
            }}
          >
            <p>SAI INDIA GYPSUM</p>
            <p>
              A Leading Manufacturer, Supplier and Exporter of Gypsum Products.
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>Image 02</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "right",
            }}
          >
            <p>COMPREHENSIVE RANGE</p>
            <p>
              We provide a comprehensive range of Gypsum products to suit all
              your needs.
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>Image 03</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "left",
            }}
          >
            <p>QUALITY ASSURANCE</p>
            <p>
              We formulate our products using high-grade raw material procured
              from trustworthy vendors.
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>Image 04</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "right",
            }}
          >
            <p>WIDE APPLICATIONS</p>
            <p>
              Our products are extensively used for industrial as well as
              residential applications.
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>Image 05</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "left",
            }}
          >
            <p>LOREM IPSUM</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              provident.
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>Image 06</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "right",
            }}
          >
            <p>LOREM IPSUM</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              beatae.
            </p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Homepage
