import React from "react"
import "./Footer.css"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer>
      <Link to="/">Home&nbsp;</Link>|<Link to="/">&nbsp;Products</Link>
      <p>© 2019 by Sai India Gypsum Products Private Limited​</p>
    </footer>
  )
}

export default Footer
