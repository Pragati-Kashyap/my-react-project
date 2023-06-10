import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";


export default function ShopNav() {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || "infodeercreative@gmail.com";
  });
  const [phone, setPhone] = useState(() => {
    return localStorage.getItem("phone") || " +1 234 122 122";
  });
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([
    "Home",
    "About",
    "Pages",
    "Shop",
    "Portfolio",
    "Contact",
  ]);
  let pageTitle;

  if (location.pathname === "/shop") {
    pageTitle = "Shop";
  } else if (location.pathname === "/portfolio") {
    pageTitle = "Portfolio";
  } else if (location.pathname === "/about") {
    pageTitle = "About Us";
  } else if (location.pathname === "/contact") {
    pageTitle = "Contact Us";
  }

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  });
  return (
    <div id="Container">
      <div class="top-header-area">
        <div class="container">
          <div class="row">
            <div class="col-12 homenav ">
              <div class="top-header-content d-flex align-items-center justify-content-between">
                <div class="top-header-meta">
                  <a href="#" class="nav-link">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                    <span>Email: {email}</span>
                  </a>

                  <a href="#" class="nav-link">
                    <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                    <span>Call Us: {phone}</span>
                  </a>
                </div>
              </div>

              <div class="top-header-meta d-flex">
                <div class="language-dropdown">
                  <div class="dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      Language
                    </a>
                  </div>
                </div>

                <div class="login">
                  <a href="/login" class="nav-link">
                    <i class="fa fa-user" aria-hidden="true"></i>{" "}
                    <span>Login</span>
                  </a>
                </div>

                <div class="cart">
                  <a href="#" class="nav-link">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    <span>
                      Cart <span class="cart-quantity">(1)</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="icon  me-2">
            <img
              src="https://themewagon.github.io/alazea/img/core-img/logo.png"
              alt="Logo"
            />
          </div>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item === "Pages" ? (
                    <NavDropdown
                      title="Pages"
                      id="basic-nav-dropdown"
                      menuAlign="right"
                    >
                      <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                      <NavDropdown.Item href="/about">About</NavDropdown.Item>
                      <NavDropdown.Item href="/shop">Shop</NavDropdown.Item>
                      <NavDropdown.Item href="/portfolio">
                        Portfolio
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                      <NavDropdown.Item href="/contact">
                        Contact
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="nav-item nav-link"
                      key={index}
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}

              <li>
                <a href="#" id="searchIcon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bg-div">
        <div className="background">
          <h2>{pageTitle}</h2>
        </div>
      </div>
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">
                <i class="fa fa-home"></i> Home
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {pageTitle}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
