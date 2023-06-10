import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">
        All right reserved &copy; Mohd Shoyeb {new Date().getFullYear()}.
      </h4>
      <p className="text-center mt-3">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#ffefba" : "",
            borderBottom: isActive ? "1px solid #ffefba" : "",
          })}
          to="/about"
        >
          About
        </NavLink>
        |<NavLink style={({ isActive }) => ({
            color: isActive ? "#ffefba" : "",
            borderBottom: isActive ? "1px solid #ffefba" : "",
          })} to="/contact">Contact</NavLink> |
        <NavLink style={({ isActive }) => ({
            color: isActive ? "#ffefba" : "",
            borderBottom: isActive ? "1px solid #ffefba" : "",
          })} to="/policy">Privacy Policy</NavLink>
      </p>
    </div>
  );
};

export default Footer;
