import React from "react"

const FireResistant = () => {
  return (
    <article className="product-details">
      <section className="product-section">
        <h4 className="product-title">SIG - Fire Resistant Gypsum Boards</h4>

        <p className="product-intro">
          SIG Fire Resistant Plasterboard is produced from high purity natural
          gypsum core being sheeted in closely adhering paper liners. SIG FR is
          produced in compliance to ASTM C1396 & EN 520 standards. SIG FR due to
          its formulation offers higher level of Fire resistance as compared to
          Regular Plasterboard and is thus used for dry wall partitions where
          such fire characteristics are specifically requested. It is to be
          noted that Fire rating of the drywall partition depends on the
          construction of the overall drywall system and thus great care needs
          to be taken to ensure that desired ratings are achieved.
        </p>

        <p className="product-intro">
          SIG Fire Resistant Board is laminated with pink paper on board face &
          grey paper on the back. It is specially designed to be used for
          systems with high requirements for fire resistance. It is designed for
          direct attachment by screws, nails or adhesive to wood or metal
          framing and even existing surfaces.
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
              <td>Can produce Between 1800 - 4000</td>
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
              <td>On request: 15/18/19</td>
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
              <td>Face: Pink, Back: Grey</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="table-section">
        <h5 className="product-subtitle">Specifications</h5>
        <table
          className="responsive table fr2"
          style={{
            textAlign: "center",
          }}
        >
          <caption>Properties (Per 12.5mm)</caption>
          <thead
            className="thead-dark"
            style={{
              textAlign: "center",
            }}
          >
            <tr>
              <th scope="col">Properties</th>
              <th scope="col">ASTM C1396</th>
              <th scope="col">DIN EN 520</th>
              <th scope="col">SIG – FR</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Thickness (mm)</td>
              <td>0.4</td>
              <td>± 0.5</td>
              <td>± 0.3</td>
            </tr>
            <tr>
              <td>Length (mm)</td>
              <td>0 to -6</td>
              <td>0 to -5</td>
              <td>0 to -4</td>
            </tr>
            <tr>
              <td>Width (mm)</td>
              <td>0 to -3</td>
              <td>O to -4</td>
              <td>0 to -3</td>
            </tr>
            <tr>
              <td>Squareness</td>
              <td>≤ 3</td>
              <td>≤ 2.5</td>
              <td>≤ 2</td>
            </tr>
            <tr>
              <td>Flexural Strength (N) Longitudinal</td>
              <td>≥ 489</td>
              <td>≥ 550</td>
              <td>≥ 650</td>
            </tr>
            <tr>
              <td>Flexural Strength (N) Transverse</td>
              <td>≥ 178</td>
              <td>≥ 210</td>
              <td>≥ 280</td>
            </tr>
            <tr>
              <td>Core Hardness (N)</td>
              <td>≥ 67</td>
              <td>Not Specified</td>
              <td>≥ 100</td>
            </tr>

            <tr>
              <td>End hardness (N)</td>
              <td>≥ 67</td>
              <td>Not Specified</td>
              <td>≥ 100</td>
            </tr>

            <tr>
              <td>Edge Hardness (N)</td>
              <td>≥ 67</td>
              <td>Not Specified</td>
              <td>≥ 100</td>
            </tr>

            <tr>
              <td>Nail Pull (N)</td>
              <td>≥ 356</td>
              <td>Not Specified</td>
              <td>≥ 395</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  )
}

export default FireResistant
