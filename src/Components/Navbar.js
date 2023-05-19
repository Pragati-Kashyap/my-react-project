import React from "react";

export default function Navbar() {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  });

  return (
    <>
      <div id="Container">
        <div class="top-header-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="top-header-content d-flex align-items-center justify-content-between">
                  <div class="top-header-meta">
                    <a
                      href="#"
                      class="nav-link"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="infodeercreative@gmail.com"
                    >
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                      <span>Email: infodeercreative@gmail.com</span>
                    </a>
                    <a
                      href="#"
                      class="nav-link"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="+1 234 122 122"
                    >
                      <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span>Call Us: +1 234 122 122</span>
                    </a>
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
        </div>

        <nav className="navbar navbar-expand-lg">
          <div class="container">
            <div class="icon  me-2">
              <img src="https://themewagon.github.io/alazea/img/core-img/logo.png" />
            </div>

            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link">
                  Home
                </a>
                <a href="#" class="nav-item nav-link">
                  About
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu rounded-0 m-0">
                    <a href="#" class="dropdown-item">
                      Property List
                    </a>
                    <a href="#" class="dropdown-item">
                      Property Type
                    </a>
                    <a href="#" class="dropdown-item">
                      Property Agent
                    </a>
                  </div>
                </div>
                <a href="#" class="nav-link ">
                  Shop
                </a>
                <a href="#" class="nav-item nav-link">
                  Portfolio
                </a>
                <a href="#" action="/login" class="nav-item nav-link">
                  Contact
                </a>
                <a id="searchIcon">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
