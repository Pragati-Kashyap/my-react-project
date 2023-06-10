import React from "react";
import { Link } from "react-router-dom";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavDropdown } from "react-bootstrap";

export default function Navbar({ cartQuantity }) {
  const user = useSelector(selectUser);
  const [email, setEmail] = React.useState(() => {
    return localStorage.getItem("email") || "infodeercreative@gmail.com";
  });
  const [phone, setPhone] = React.useState(() => {
    return localStorage.getItem("phone") || " +1 234 122 122";
  });

  const [newEmail, setNewEmail] = React.useState("");

  const [newPhone, setNewPhone] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  }, [email, phone]);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };
  const handleUpdateEmail = (e) => {
    setEmail(newEmail);
  };
  const handleUpdatePhone = (e) => {
    setPhone(newPhone);
  };

  const [menuItems, setMenuItems] = React.useState([
    "Home",
    "About",
    "Pages",
    "Shop",
    "Portfolio",
    "Contact",
  ]);
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
                    <a href="#" class="nav-link">
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                      <span>Email: {email}</span>
                    </a>
                    {user && (
                      <div className="editable1">
                        <input
                          className="form-input-edit1"
                          type="text"
                          value={newEmail}
                          onChange={handleEmailChange}
                        />
                        <button
                          className="alazea-btn1"
                          onClick={handleUpdateEmail}
                        >
                          Update
                        </button>{" "}
                      </div>
                    )}
                    <a href="#" class="nav-link">
                      <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span>Call Us: {phone}</span>
                    </a>{" "}
                    {user && (
                      <div className="editable1">
                        <input
                          className="form-input-edit1"
                          type="text"
                          value={newPhone}
                          onChange={handlePhoneChange}
                        />
                        <button
                          className="alazea-btn1"
                          onClick={handleUpdatePhone}
                        >
                          Update
                        </button>{" "}
                      </div>
                    )}
                  </div>

                  <div class="top-header-meta d-flex">
                    <div class="language-dropdown">
                      <a href="#" class="nav-link" style={{ color: "white" }}>
                        Language
                      </a>
                    </div>

                    <div class="login">
                      <a href={user ? "/" : "login"} class="nav-link">
                        <i class="fa fa-user" aria-hidden="true"></i>{" "}
                        <span>{user ? "Logout" : "Login"}</span>
                      </a>
                    </div>

                    <div className="cart">
                      <Link to="/cart" className="nav-link">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        <span>
                          Cart{" "}
                          <span className="cart-quantity">
                            ({cartQuantity})
                          </span>
                        </span>
                      </Link>
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
                <>
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item === "Pages" ? (
                        <div className="dropdown">
                          <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/home">
                              Home
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/about">
                              About
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/shop">
                              Shop
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/portfolio">
                              Portfolio
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/blog">
                              Blog
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/contact">
                              Contact
                            </NavDropdown.Item>
                          </NavDropdown>
                        </div>
                      ) : (
                        <Link
                          to={`/${item.toLowerCase()}`}
                          key={index}
                          className="nav-item nav-link"
                        >
                          {item}
                        </Link>
                      )}
                    </div>
                  ))}
                  <a href="#" id="searchIcon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </a>
                </>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
