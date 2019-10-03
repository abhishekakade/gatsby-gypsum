import React from "react"
import constructionImage from "../../images/bg10.jpg"
import "./About.css"

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: 0,
      }}
    >
      <h2>ABOUT</h2>
      <section className="product-section">
        <img
          src={constructionImage}
          alt="Sai India Gypsum"
          id="about-page-img"
          style={{
            width: "65%",
            // maxWidth: "70%",
            height: "auto",
            marginTop: "1rem",
            display: "block",
            margin: "auto",
            border: "2px solid midnightblue",
            borderRadius: "5px",
          }}
        />
        <p
          id="about-page-intro"
          style={{
            fontSize: "1.4rem",
            lineHeight: "40px",
            maxWidth: "65ch",
            margin: "auto",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          Established in the year <strong>2002</strong>, we,
          <strong> 'Sai India Gypsum Products Private Limited'</strong>, are a
          leading manufacturer, supplier, and exporter of a comprehensive range
          of Gypsum Products. We formulate our products using the high-grade raw
          material, which is procured from trustworthy vendors of the market.
          Due to their durability, accurate composition, and elegant finish, our
          products are superior and are extensively used for various industrial
          and residential applications.
        </p>
      </section>
    </section>
  )
}

export default About
