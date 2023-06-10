import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import s13 from "./13.jpg";
import s14 from "./14.jpg";
import s15 from "./15.jpg";

export default function Testimonial() {
  return (
    <Carousel
      autoPlay={true}
       showArrows={true}
      showStatus={false}
       showThumbs={true}
       showIndicators={false}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="bg-img">
              <img src={s13} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-container">
              <h2>TESTIMONIAL</h2>
              <p>Some kind words from clients about Alazea</p>

              <p>
                “Alazea is a pleasure to work with. Their ideas are creative,
                they came up with imaginative solutions to some tricky issues,
                their landscaping and planting contacts are equally excellent we
                have a beautiful but also manageable garden as a result. Thank
                you!”
              </p>

              <h6>Mr. Jonas Nick</h6>
              <p>CEO of NAVATECH</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="bg-img">
              <img src={s14} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-container">
              <h2>TESTIMONIAL</h2>
              <p>Some kind words from clients about Alazea</p>

              <p>
                “Alazea is a pleasure to work with. Their ideas are creative,
                they came up with imaginative solutions to some tricky issues,
                their landscaping and planting contacts are equally excellent we
                have a beautiful but also manageable garden as a result. Thank
                you!”
              </p>

              <h6>Mr. Jonas Nick</h6>
              <p>CEO of NAVATECH</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="bg-img">
              <img src={s15} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-container">
              <h2>TESTIMONIAL</h2>
              <p>Some kind words from clients about Alazea</p>

              <p>
                “Alazea is a pleasure to work with. Their ideas are creative,
                they came up with imaginative solutions to some tricky issues,
                their landscaping and planting contacts are equally excellent we
                have a beautiful but also manageable garden as a result. Thank
                you!”
              </p>

              <h6>Mr. Jonas Nick</h6>
              <p>CEO of NAVATECH</p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
