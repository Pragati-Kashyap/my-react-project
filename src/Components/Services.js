import React from "react";

export default function Services() {
  return (
    <section class="services-area">
      <div class="Container">
        <div class="row ">
          <div class="col-12">
            <div class="section-heading text-center">
              <h2>OUR SERVICES</h2>
              <p>We provide the perfect service for you.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-12 col-lg-5">
            <div class="alazea-service-area mb-100">
              <div class="single-service-area d-flex  align-items-center wow fadeInUp">
                <div class="service-icon mr-30">
                  <img
                    src="https://themewagon.github.io/alazea/img/core-img/s1.png"
                    alt=""
                  />
                </div>
                <div class="service-content">
                  <h5>Plants Care</h5>
                  <p>
                    In Aenean purus, pretium sito amet sapien denim moste
                    consectet sedoni urna placerat sodales.service its.
                  </p>
                </div>
              </div>

              <div class="single-service-area d-flex align-items-center wow fadeInUp">
                <div class="service-icon mr-30">
                  <img
                    src="https://themewagon.github.io/alazea/img/core-img/s2.png"
                    alt=""
                  />
                </div>

                <div class="service-content">
                  <h5>Pressure Washing</h5>
                  <p>
                    In Aenean purus, pretium sito amet sapien denim moste
                    consectet sedoni urna placerat sodales.service its.
                  </p>
                </div>
              </div>

              <div class="single-service-area d-flex align-items-center wow fadeInUp">
                <div class="service-icon mr-30">
                  <img
                    src="https://themewagon.github.io/alazea/img/core-img/s3.png"
                    alt=""
                  />
                </div>

                <div class="service-content">
                  <h5>Tree Service &amp; Trimming</h5>
                  <p>
                    In Aenean purus, pretium sito amet sapien denim moste
                    consectet sedoni urna placerat sodales.service its.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="alazea-video-area bg-overlay mb-100">
              <img
                src="https://themewagon.github.io/alazea/img/bg-img/23.jpg"
                alt=""
              />
              <a>
                <i
                  class="fa fa-play"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
