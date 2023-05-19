import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default function Header() {
  return (
    <Carousel
   
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay = {true}
     infiniteLoop = {true}
     >
      <div className="bg-img"style={{backgroundColor : "rgba(17, 17, 17, 0.5)"}} >
        <img src= "https://themewagon.github.io/alazea/img/bg-img/1.jpg" />
        <div className="slides-content text-center">
          <h2>Plants exist in the weather and light rays that surround them</h2>
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
      <div className="bg-img" style={{backgroundColor : "rgba(17, 17, 17, 0.5)"}} >
        <img src= "https://themewagon.github.io/alazea/img/bg-img/2.jpg" />
        <div class="slides-content text-center">
          <h2>Plants exist in the weather and light rays that surround them</h2>
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
