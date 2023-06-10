import React, { Component, useState } from "react";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Header() {
  const [text, setText] = useState(() => {
    return (
      localStorage.getItem("text") ||
      "Plants exist in the weather and light rays that surround them"
    );
  });
  const [newText, setnewText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  React.useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);
  const handleTextChange = (e) => {
    setnewText(e.target.value);
  };
  const handleUpdatetext = (e) => {
    setText(newText);
  };
  const user = useSelector(selectUser);
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      <div
        className="bg-img"
        style={{ backgroundColor: "rgba(17, 17, 17, 0.5)" }}
      >
        <img
          src="https://themewagon.github.io/alazea/img/bg-img/1.jpg"
        />
        <div className="slides-content text-center">
          <h2>
            {text}{" "}
            {user && (
              <i
                class="fa-solid fa-pen-to-square"
                onClick={() => setIsFormVisible(!isFormVisible)}
                style={{ color: "#70c745" }}
              ></i>
            )}
          </h2>

          {user && isFormVisible && (
            <div className="editable">
              <input
                className="form-input-edit"
                type="text"
                value={newText}
                onChange={handleTextChange}
                style={{ flexBasis: "100%" }}
              />
              <button className="btn alazea-btn" onClick={handleUpdatetext}>
                Update
              </button>
            </div>
          )}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pellentesque ante nec ipsum iaculis, ac iaculis ipsum porttitor.
            Vivamus cursus nisl lectus, id mattis nisl lobortis eu. Duis diam
            augue, dapibus ut dolor at, mattis maximus dolor.
          </p>
          <div class="welcome-btn-group">
            <a href="#" class="btn alazea-btn mr-30">
              GET STARTED
            </a>
            <a href="#" class="btn alazea-btn active">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
      <div
        className="bg-img"
        style={{ backgroundColor: "rgba(17, 17, 17, 0.5)" }}
      >
        <img src="https://themewagon.github.io/alazea/img/bg-img/2.jpg" />
        <div class="slides-content text-center">
          <h2>
            {text}{" "}
            {user && (
              <i
                class="fa-solid fa-pen-to-square"
                onClick={() => setIsFormVisible(!isFormVisible)}
                style={{ color: "#70c745" }}
              ></i>
            )}
          </h2>
          {user && isFormVisible && (
            <div className="editable">
              <input
                type="text"
                className="form-input-edit"
                value={newText}
                onChange={handleTextChange}
                style={{ flexBasis: "100%" }}
              />
              <button className="btn alazea-btn" onClick={handleUpdatetext}>
                Update
              </button>
            </div>
          )}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pellentesque ante nec ipsum iaculis, ac iaculis ipsum porttitor.
            Vivamus cursus nisl lectus, id mattis nisl lobortis eu. Duis diam
            augue, dapibus ut dolor at, mattis maximus dolor.
          </p>
          <div class="welcome-btn-group">
            <a href="#" className="btn alazea-btn mr-30">
              GET STARTED
            </a>
            <a href="#" class="btn alazea-btn active">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
