import { React, useState, useEffect } from "react";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Footer = () => {
  const [address, setAddress] = useState(
    localStorage.getItem("address") || "505 Silk Rd, New York"
  );
  const [phone, setPhone] = useState(
    localStorage.getItem("phone") || "+1 234 122 122"
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") || "info.deercreative@gmail.com"
  );
  const [openHours, setOpenHours] = useState(
    localStorage.getItem("openHours") || "Mon - Sun: 8 AM to 9 PM"
  );
  const [happyHours, setHappyHours] = useState(
    localStorage.getItem("happyHours") || "Sat: 2 PM to 4 PM"
  );
  const [price, setPrice] = useState(localStorage.getItem("price") || "$10.99");
  const [prices, setPrices] = useState(
    localStorage.getItem("prices") || "$11.99"
  );

  const user = useSelector(selectUser);
  useEffect(() => {
    localStorage.setItem("phone", phone);
  }, [phone]);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("openHours", openHours);
  }, [openHours]);

  useEffect(() => {
    localStorage.setItem("happyHours", happyHours);
  }, [happyHours]);

  useEffect(() => {
    localStorage.setItem("price", price);
  }, [price]);

  useEffect(() => {
    localStorage.setItem("prices", prices);
  }, [prices]);
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOpenHoursChange = (event) => {
    setOpenHours(event.target.value);
  };

  const handleHappyHoursChange = (event) => {
    setHappyHours(event.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handlePricesChange = (e) => {
    setPrices(e.target.value);
  };
  const [btnClicked, setBtnClicked] = useState(false)
  const handleSaveChanges = () => {
    setBtnClicked(true)
  };
  return (
    <div className="Footer">
      <div className="Container">
        <div className="row">
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-footer-widget">
              <div class="footer-logo mb-30">
                <a href="#">
                  <img
                    src="https://themewagon.github.io/alazea/img/core-img/logo.png"
                    alt=""
                  />
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit samet, consectetur adipiscing elit. India
                situs atione mantor
              </p>
              <div class="social-info">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-footer-widget">
              <div class="widget-title">
                <h5>QUICK LINK</h5>
              </div>
              <div class="widget-nav">
                <div className="nav-ul">
                  <ul>
                    <li>
                      <a href="#">Purchase</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Payment</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Return</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-ul">
                  <ul>
                    <li>
                      <a href="#">Advertise</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Policities</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-footer-widget">
              <div class="widget-title">
                <h5>BEST SELLER</h5>
              </div>

              <div class="single-best-seller-product d-flex align-items-center">
                <div class="product-thumbnail">
                  <a href="shop-details.html">
                    <img
                      src="https://themewagon.github.io/alazea/img/bg-img/4.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="product-info">
                  <a href="shop-details.html">Cactus Flower</a>
                  <p>{price}</p>
                  {user && (
                    <input
                      type="text"
                      className="form-input-edit"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  )}
                </div>
              </div>

              <div class="single-best-seller-product d-flex align-items-center">
                <div class="product-thumbnail">
                  <a href="shop-details.html">
                    <img
                      src="https://themewagon.github.io/alazea/img/bg-img/5.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="product-info">
                  <a href="shop-details.html">Tulip Flower</a>
                  <p>{prices}</p>
                  {user && (
                    <input
                      className="form-input-edit"
                      type="text"
                      value={prices}
                      onChange={handlePricesChange}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-footer-widget">
              <div class="widget-title">
                <h5>CONTACT</h5>
              </div>
              {/* 
              <div class="contact-information">
                <p>
                  <span>Address:</span> 505 Silk Rd, New York
                </p>
                <p>
                  <span>Phone:</span> +1 234 122 122
                </p>
                <p>
                  <span>Email:</span> info.deercreative@gmail.com
                </p>
                <p>
                  <span>Open hours:</span> Mon - Sun: 8 AM to 9 PM
                </p>
                <p>
                  <span>Happy hours:</span> Sat: 2 PM to 4 PM
                </p>
              </div> */}
              <div class="contact-information">
                <p>
                  <span>Address: {address}</span>
                  {user && (
                    <input
                      type="text"
                      value={address}
                      onChange={handleAddressChange}
                    />
                  )}
                </p>
                <p>
                  <span>Phone: {phone}</span>
                  {user && (
                    <input
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  )}
                </p>
                <p>
                  <span>Email: {email}</span>
                  {user && (
                    <input
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  )}
                </p>
                <p>
                  <span>Open hours: {openHours}</span>
                  {user && (
                    <input
                      type="text"
                      value={openHours}
                      onChange={handleOpenHoursChange}
                    />
                  )}
                </p>
                <p>
                  <span>Happy hours: {happyHours}</span>
                  {user && (
                    <input
                      type="text"
                      value={happyHours}
                      onChange={handleHappyHoursChange}
                    />
                  )}
                </p>
              </div>
            </div>
          </div>
          {user && (
            <button className="alazea-btn" onClick={handleSaveChanges}>
           {btnClicked ? "Changes Saved !" : "Save Changes"}   
            </button>
          )}
        </div>
        <div class="footer-bottom-area">
          <div class="container">
            <div class="row-1">
              <div class="col-12 col-md-6">
                <div class="copywrite-text">
                  <p>
                    © Copyright ©
                    <script>document.write(new Date().getFullYear());</script>
                    2023 All rights reserved | This template is made with{" "}
                    <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="footer-nav">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Service</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
