import React from "react"
import { PlusSquare } from "styled-icons/fa-solid"
const Tiles = () => {
  return (
    <article className="product-details">
      <section className="product-section">
        <h4 className="product-title">SIG – Tiles</h4>

        <p className="product-intro">
          <strong>SIG – Tiles</strong> are laminated with PVC Film on the Face
          Side, Metalised Polyester Film on the backside They are mainly used in
          Offices, Hospitals, High Rise Buildings, Malls, etc.
        </p>
      </section>

      <section className="product-section">
        <div
          className="main-list-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            // negative marginTop to negate the top margin on list-container divs
            marginTop: "-1rem",
          }}
        >
          <div
            className="list-container"
            style={{
              display: "inline-block",
              margin: "1rem",
              border: "2px solid black",
              borderRadius: "5px",
            }}
          >
            <h5
              className="product-subtitle"
              style={{
                background: "black",
                color: "#dddddd",
                margin: 0,
                padding: "0.5rem",
              }}
            >
              Advantages
            </h5>
            <ul className="list-group">
              <li className="list-group-item">
                <PlusSquare className="plussquare" size="1rem" />
                Easy to Install
              </li>
              <li className="list-group-item">
                <PlusSquare className="plussquare" size="1rem" />
                Maintenance Free
              </li>
              <li className="list-group-item">
                <PlusSquare className="plussquare" size="1rem" />
                Long-lasting
              </li>
              <li className="list-group-item">
                <PlusSquare className="plussquare" size="1rem" />
                No Emission of Harmful Chemicals
              </li>
            </ul>
          </div>

          <div className="list1">
            <h5 className="product-subtitle">
              They are available in 3 designs:
            </h5>
            <ul className="list-group">
              <li>SIG-154</li>
              <li>SIG-569</li>
              <li>SIG-975</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Tiles
