import React from "react"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer
      style={
        {
          // position: "absolute",
          // bottom: 0,
          // left: 0,
        }
      }
    >
      <Link to="/">Home&nbsp;</Link>|<Link to="/">&nbsp;Products</Link>
      <p>© 2019 by Sai India Gypsum Products Private Limited​</p>
    </footer>
  )
}

export default Footer
