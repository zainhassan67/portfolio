import React from "react";
import "./NavBar.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function NavBar() {
  return (
    <nav className="navBar">
      <div className="max-width">
        <div className="logo">
          <a href="#home">
            Portfo<span>lio.</span>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home" className="menu-button">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-button">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="menu-button">
              Services
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-button">
              Skills
            </a>
          </li>
          <li>
            <a href="#teams" className="menu-button">
              Teams
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-button">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-button">
          {/* <i className="fa fa-bars"></i> */}
          <FontAwesomeIcon
            icon={faBars}
          />
        </div>
      </div>
    </nav>
  );
}

$(document).ready
(
  function () 
  {
    $(window).scroll
    (
      function () 
      {
        if (this.scrollY > 20) 
        {
          $(".navBar").addClass("sticky");
        } 
        else 
        {
          $(".navBar").removeClass("sticky");
        }
      }
  );
});

export default NavBar;
