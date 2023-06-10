import React from "react";
import { PhotoAlbum } from "react-photo-album";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function PortfolioNav(props) {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const user = useSelector(selectUser);
  const categories = [
    { id: "all", label: "All" },
    { id: "coffee", label: "Coffee Design" },
    { id: "garden", label: "Garden" },
    { id: "coffee", label: "Home Design" },
    { id: "garden", label: "Office Design" },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    props.onCategoryChange(categoryId);
  };

  const photos = [
    {
      id: 1,
      src: "https://themewagon.github.io/alazea/img/bg-img/16.jpg",
      width: 1600,
      height: 1700,
    },
    {
      id: 2,
      src: "https://themewagon.github.io/alazea/img/bg-img/17.jpg",
      width: 1600,
      height: 1700,
    },
    {
      id: 3,
      src: "https://themewagon.github.io/alazea/img/bg-img/18.jpg",
      width: 1600,
      height: 1700,
    },
    {
      id: 4,
      src: "https://themewagon.github.io/alazea/img/bg-img/19.jpg",
      width: 1600,
      height: 1700,
    },
    {
      id: 5,
      src: "https://themewagon.github.io/alazea/img/bg-img/20.jpg",
      width: 778,
      height: 700,
    },
    {
      id: 6,
      src: "https://themewagon.github.io/alazea/img/bg-img/21.jpg",
      width: 760,
      height: 700,
    },
    {
      id: 7,
      src: "https://themewagon.github.io/alazea/img/bg-img/22.jpg",
      width: 1600,
      height: 700,
    },
  ];
  const [sphotos, setPhotos] = React.useState(photos);
  const [newPhotoUrl, setNewPhotoUrl] = React.useState("");

  const handleAddPhoto = () => {
    if (newPhotoUrl.trim() !== "") {
      const newPhoto = {
        src: newPhotoUrl,
        width: 1600,
        height: 1700,
      };

      setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
      setNewPhotoUrl("");
    }
  };

  const [isEditable, setIsEditable] = React.useState(
    Array(sphotos.length).fill(false)
  );
  const [newPhotos, setNewPhotos] = React.useState(
    Array(sphotos.length).fill({})
  );
  const handleEdit = (index) => {
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[index] = true;
      return updatedEditable;
    });
    setNewPhotos((prevState) => {
      const updatedNewPhotos = [...prevState];
      updatedNewPhotos[index] = { ...sphotos[index] };
      return updatedNewPhotos;
    });
  };
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const [buttonClicked, setIsbuttonClicked] = React.useState(false);
  const handleSave = (index) => {
    setPhotos((prevState) => {
      const updatedPhotos = [...prevState];
      updatedPhotos[index] = newPhotos[index];
      return updatedPhotos;
    });
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[index] = false;
      return updatedEditable;
    });
  };

  const handleChange = (index, field, value) => {
    setNewPhotos((prevState) => {
      const updatedNewPhotos = [...prevState];
      updatedNewPhotos[index] = {
        ...updatedNewPhotos[index],
        [field]: value,
      };
      return updatedNewPhotos;
    });
  };
  const handleDeletePhoto = (index) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = prevPhotos.filter((_, i) => i !== index);
      return updatedPhotos;
    });
  };
  const handleToggle = () => {
    setIsFormVisible((prevValues) => !prevValues);
    setIsbuttonClicked((prevValues) => !prevValues);
  };
  return (
    <section className="Portfolio">
      <div className="Container">
        <h3>Our Portfolio</h3>
        <p>We devote all of our experience and efforts for creation</p>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={activeCategory === category.id ? "active" : ""}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.label}
            </li>
          ))}
        </ul>
        <div>
          <div className="photo-portfolio1">
            <div className="photo-row1">
              {sphotos.map((photo, index) => (
                <div
                  className={`photo-portfolio ${
                    photo.id === 7 ? "special-photo" : ""
                  }`}
                  key={photo.id}
                >
                  <img src={photo.src} alt="" />
                  <div className="image-overlay" >
                  <h3>Minimal Flower Plants</h3>
                  <h5>Office Plants</h5>
                  </div>
                  {user && (
                    <div
                      className="delete-icon"
                      onClick={() => handleDeletePhoto(index)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {user && (
          <>
            <button className="alazea-btn-card" onClick={handleToggle}>
              {buttonClicked ? (
                <i class="fa-solid fa-minus"></i>
              ) : (
                <i class="fa-solid fa-plus"></i>
              )}{" "}
            </button>{" "}
            <div>
              {isFormVisible && (
                <div className="input-form-edit">
                  {" "}
                  <input
                    type="url"
                    className="img-url"
                    name="img"
                    placeholder="Enter URL to add photo"
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                  />
                  <button className="alazea-btn" onClick={handleAddPhoto}>
                    Add Photo
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default PortfolioNav;
