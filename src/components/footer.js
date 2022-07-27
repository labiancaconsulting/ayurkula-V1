/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
      All rights reserved - 
       
      <Link to="/">Ayurkula.com</Link> 2022
      </p>
    </div>
  </footer>
)

export default Footer
