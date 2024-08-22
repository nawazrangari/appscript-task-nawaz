import React from "react";
import "./Header.css";
import logo from "../../images/Logo.png";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">

          <div className="div-flex">
            <span className="responsive-bar">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
            <img src={logo} alt="Logo" />
          </div>
          
          <h1>LOGO</h1>
          <div className="actions">
            <a href="#">
              <i className="fa fa-search"></i>
            </a>

            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />

            <a href="#">
              <i className="fa fa-heart"></i>
            </a>
            <a href="#">
              <i className="fa fa-shopping-bag"></i>
            </a>
            <a href="#">
              <i className="fa fa-user"></i>
            </a>
            <select style={{ border: "none" }}>
              <option style={{ fontWeight: "bold" }}>ENG</option>
            </select>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
