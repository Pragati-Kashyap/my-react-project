import { React, useState } from "react";

export default function ProductsAll() {
  const [photos, setPhotos] = useState([
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/40.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/41.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/42.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/43.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/44.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/45.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/46.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/47.png",
    },
    {
      src: "https://themewagon.github.io/alazea/img/bg-img/46.png",
    },
  ]);

  const [photoText, setPhotoText] = useState([
    "Cactus Flower",
    "Cactus Flower",
    "Cactus Flower",
  ]);

  const [newPrices, setNewPrices] = useState(["$10.99", "$10.99", "$10.99"]);

  return (
    <div className="Container">
      <div className=" row d-block product-div">
        <div className="photo-list photos col-12 col-sm-6 col-lg-4">
          {photos.slice(0, 3).map((photo, index) => (
            <div key={index}>
              <div className="image-container">
                <img src={photo.src} alt="" />
              </div>
              <p className="cactus">{photoText[index]}</p>
              <span className="price">{newPrices[index]}</span>
            </div>
          ))}
        </div>
        <div className="photo-list photos col-12 col-sm-6 col-lg-4">
          {photos.slice(3, 6).map((photo, index) => (
            <div key={index}>
              <div className="image-container">
                <img src={photo.src} alt="" />
              </div>
              <p className="cactus">{photoText[index]}</p>
              <span className="price">{newPrices[index]}</span>
            </div>
          ))}
        </div>
        <div className="photo-list photos col-12 col-sm-6 col-lg-4">
          {photos.slice(6, 9).map((photo, index) => (
            <div key={index}>
              <div className="image-container">
                <img src={photo.src} alt="" />  
              </div>
              <p className="cactus">{photoText[index]}</p>
              <span className="price">{newPrices[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
