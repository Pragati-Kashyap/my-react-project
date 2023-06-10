import { React, useState, useEffect } from "react";
import Cart from "./Cart";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  const [photos, setPhotos] = useState([
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/9.jpg",
      width: 1600,
      height: 1700,
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/10.jpg",
      width: 1600,
      height: 1700,
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/11.jpg",
      width: 1600,
      height: 1700,
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/12.jpg",
      width: 1600,
      height: 1700,
    },
  ]);

  const user = useSelector(selectUser);
  const [newPhotoSrc, setNewPhotoSrc] = useState("");
  const [photoText, setPhotoText] = useState([
    "Cactus Flower",
    "Cactus Flower",
    "Cactus Flower",
    "Cactus Flower",
  ]);
  const [newPhotoText, setNewPhotoText] = useState("");
  const [newPrices, setNewPrices] = useState([
    "$10.99",
    "$10.99",
    "$10.99",
    "$10.99",
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleAddPhoto = () => {
    if (newPhotoSrc.trim() !== "") {
      const newPhoto = {
        src: newPhotoSrc,
      };
      setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
      setPhotoText((prevText) => [...prevText, newPhotoText]);
      setNewPhotoSrc("");
      setNewPhotoText("");
      setNewPrices((prevPrices) => [...prevPrices, "$10.99"]);
    }
  };
  const [showPopups, setShowPopups] = useState(Array(photos.length).fill(false));
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (index) => {
    const selectedProduct = {
      photo: photos[index],
      text: photoText[index],
      price: newPrices[index],
    };
    setCartItems((prevItems) => [...prevItems, selectedProduct]);

    const updatedPopups = [...showPopups];
    updatedPopups[index] = true;
    setShowPopups(updatedPopups);

    setTimeout(() => {
      updatedPopups[index] = false;
      setShowPopups(updatedPopups);
    }, 3000);
    toast('Item added to cart successfully!');
  };
;
  
  const handleTextChange = (index, value) => {
    const updatedTexts = [...photoText];
    updatedTexts[index] = value;
    setPhotoText(updatedTexts);
  };

  const handlePriceChange = (index, value) => {
    const updatedPrices = [...newPrices];
    updatedPrices[index] = value;
    setNewPrices(updatedPrices);
  };
  const handleDeletePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    setPhotoText((prevText) => prevText.filter((_, i) => i !== index));
    setNewPrices((prevPrices) => prevPrices.filter((_, i) => i !== index));
  };
  return (
    <section className="Products">
      <div className="Container">
        <h3>New Arrivals</h3>
        <p>We have the latest products, it must be exciting for you</p>
        <div className="photo-list">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.src} alt="" />
              <p className="cactus">{photoText[index]}</p>
              <span className="price">{newPrices[index]}</span>
              <div class="product-meta d-flex">
                <a href="#" class="wishlist-btn">
                  <i class="fa-regular fa-heart"></i>
                </a>
                <a
                  class="add-to-cart-btn"
                  onClick={() => handleAddToCart(index)}
                >
                  Add to cart
                </a>
                {showPopups[index] && (
                  <div className="popup">
                    <p>Product added successfully!</p>
                    <i class="fa-sharp fa-solid fa-check"></i>
                  </div>
                )}
                <a href="#" class="compare-btn">
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </a>
              </div>
              {user && (
                <div
                  className="delete-icon"
                  onClick={() => handleDeletePhoto(index)}
                >
                  <i class="fa-solid fa-trash"></i>
                </div>
              )}
            </div>
          ))}
          {user && (
            <div className="add-photo-form">
              <input
                className="form-input-edit"
                type="text"
                placeholder="Enter photo URL"
                value={newPhotoSrc}
                onChange={(event) => setNewPhotoSrc(event.target.value)}
              />
              <input
                className="form-input-edit"
                type="text"
                placeholder="Enter photo text"
                value={newPhotoText}
                onChange={(event) => setNewPhotoText(event.target.value)}
              />
              <input
                className="form-input-edit"
                type="text"
                placeholder="Enter price"
                value={newPrices[photos.length]}
                onChange={(event) =>
                  handlePriceChange(photos.length, event.target.value)
                }
              />
              <button className="alazea-btn" onClick={handleAddPhoto}>
                Add Photo
              </button>
            </div>
          )}
        </div>
        <Cart cartItems={cartItems} />

        <a href="/shop" className="alazea-btn view">
          View All
        </a>
      </div>
    </section>
  );
}

export default Products;
