import React from "react"
import "./StatsAnimation.css"
import "../Products/Products.css"
const StatsAnimation = () => {
  return (
    <article
      className="product-details"
      style={{
        padding: 0,
      }}
    >
      <section id="slider" className="product-section">
        <div class="container">
          <div class="slide">
            <h3>2002</h3>
            <p>Year Established</p>
          </div>
          <div class="slide">
            <h3>17</h3>
            <p>Years In Business</p>
          </div>
          <div class="slide">
            <h3>9001:2008</h3>
            <p>ISO Certification</p>
          </div>
          <div class="slide">
            <h3>OHSAS</h3>
            <p>DCS Certification</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default StatsAnimation
