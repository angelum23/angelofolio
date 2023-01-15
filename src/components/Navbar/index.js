import React from "react";
import { FaHome, FaSmileWink, FaPhoneAlt, FaClipboardList } from "react-icons/fa";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/" activeStyle>
          <FaHome/>&nbsp;Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          <FaSmileWink/>&nbsp;About
        </NavLink>
        <NavLink to="/contact" activeStyle>
          <FaPhoneAlt/>&nbsp;Contact
        </NavLink>
        <NavLink to="/portfolio" activeStyle>
          <FaClipboardList/>&nbsp;Portfolio
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
  
export default Navbar;