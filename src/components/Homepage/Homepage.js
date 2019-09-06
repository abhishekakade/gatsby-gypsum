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
            <p>LOREM IPSUM</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              magnam.
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
            <p>LOREM IPSUM</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, assumenda.
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
            <p>LOREM IPSUM</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              aut.
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
            <p>LOREM IPSUM</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              provident.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              deleniti.
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
