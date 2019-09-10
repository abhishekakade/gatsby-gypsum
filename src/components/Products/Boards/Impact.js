import React from "react"

const Impact = () => {
  return (
    <article className="product-details">
      <section className="product-section">
        <h4 className="product-title">SIG - Impact Resistant Boards</h4>

        <p className="product-intro">
          SIG Impact Resistant Board is produced from high purity natural gypsum
          core being sheeted in closely adhering paper liners. SIG IR is
          produced in compliance to ASTM C1396 & EN 520 standards and tested
          accordance to ASTM C1629. SIG IR is tested and certified by leading
          third party laboratories. SIG IR is produced in wide variety of
          length, width, thickness & edge types to cover the entire spectrum of
          the requirement.
        </p>

        <p className="product-intro">
          SIG IR have high density gypsum core with glass fibers and special
          additives in strong paper liners to provide high impact rating. SIG IR
          is used in areas subject to crowd pressure and impact damage such as
          corridors and circulation areas in residential, hospitals, educational
          institutions, airports etc.
        </p>
        <p className="product-intro">
          SIG IR is laminated with yellow paper lining on board face & grey
          paper on the back. It is high performance special plasterboard
          designed for systems for high impact resistance.
        </p>
      </section>

      <section className="table-section">
        <h5 className="product-subtitle">Details</h5>

        <table
          className="table fr1"
          style={{
            textAlign: "center",
            background: "white",
          }}
        >
          <thead className="thead">
            <tr>
              <th style={{ textAlign: "center" }} scope="col">
                Length (mm)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard 1830</td>
            </tr>
            <tr>
              <td>Can produce Between 1800 - 3000</td>
            </tr>

            <tr>
              <th scope="col">Width (mm)</th>
            </tr>

            <tr>
              <td>Standard 1220</td>
            </tr>
            <tr>
              <td>Can Produce Between 1200 – 1220</td>
            </tr>

            <tr>
              <th scope="col">Thickness (mm)</th>
            </tr>

            <tr>
              <td>Standard 12.5mm</td>
            </tr>
            <tr>
              <td>On request: 9.5/15/16</td>
            </tr>
            <tr>
              <th scope="col">Edge</th>
            </tr>
            <tr>
              <td>Tapered</td>
            </tr>
            <tr>
              <th scope="col">Colour</th>
            </tr>
            <tr>
              <td>Face: Yellow, Back: Grey</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  )
}

export default Impact
