import React from "react";

export default function About() {
  return (
    <section class="about-us-area">
      <div class="container">
        <div class="row ">
          <div class="col-12 col-lg-4">
            <div class="section-heading">
              <h2>ABOUT US</h2>
              <p>We are leading in the plants service fields.</p>
            </div>
            <p>
              Quisque orci quam, vulputate non commodo finibus, molestie ac
              ante. Duis in sceleri quesem. Nulla sit amet varius nunc. Maecenas
              dui, tempeu ullam corper in.
            </p>

            <div class="alazea-progress-bar mb-50">
              <div class="single_progress_bar">
                <p>Office plants</p>
                <div id="bar1" class="barfiller">
                  <div class="tipWrap">
                    <span class="tip" style={{ left: "268px" }}>
                      80%
                    </span>
                  </div>
                  <span
                    class="fill"
                    data-percentage="80"
                    style={{ width: "290px" }}
                  ></span>
                </div>
              </div>

              <div class="single_progress_bar">
                <p>Field manager</p>
                <div id="bar2" class="barfiller">
                  <div class="tipWrap">
                    <span class="tip" style={{ left: "250px" }}>
                      70%
                    </span>
                  </div>
                  <span class="fill" style={{ width: "270px" }}></span>
                </div>
              </div>

              <div class="single_progress_bar">
                <p>Landscape design</p>
                <div id="bar3" class="barfiller">
                  <div class="tipWrap">
                    <span class="tip" style={{ left: "300px" }}>
                      85%
                    </span>
                  </div>
                  <span class="fill" style={{ width: "310px" }}></span>
                </div>
              </div>

              <div class="single_progress_bar">
                <p>Garden Care</p>
                <div id="bar4" class="barfiller">
                  <div class="tipWrap">
                    <span class="tip" style={{ left: "230px" }}>
                      65%
                    </span>
                  </div>
                  <span class="fill" style={{ width: "250px" }}></span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="alazea-benefits-area">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <div class="single-benefits-area">
                    <img
                      src="https://themewagon.github.io/alazea/img/core-img/b1.png"
                      alt=""
                      class="mb-3"
                    />
                    <h5>Quality Products</h5>
                    <p>
                      Intiam eu sagittis est, at commodo lacini libero. Praesent
                      dignissim sed odio vel aliquam manta lagorn.
                    </p>
                  </div>
                </div>

                <div class="col-12 col-sm-6">
                  <div class="single-benefits-area">
                    <img
                      src="https://themewagon.github.io/alazea/img/core-img/b2.png"
                      alt=""
                      class="mb-3"
                    />
                    <h5>Perfect Service</h5>
                    <p>
                      Intiam eu sagittis est, at commodo lacini libero. Praesent
                      dignissim sed odio vel aliquam manta lagorn.
                    </p>
                  </div>
                </div>

                <div class="col-12 col-sm-6">
                  <div class="single-benefits-area">
                    <img
                      src="https://themewagon.github.io/alazea/img/core-img/b3.png"
                      alt=""
                      class="mb-3"
                    />
                    <h5>100% Natural</h5>
                    <p>
                      Intiam eu sagittis est, at commodo lacini libero. Praesent
                      dignissim sed odio vel aliquam manta lagorn.
                    </p>
                  </div>
                </div>

                <div class="col-12 col-sm-6">
                  <div class="single-benefits-area">
                    <img
                      src="https://themewagon.github.io/alazea/img/core-img/b4.png"
                      class="mb-3"
                      alt=""
                    />
                    <h5>Environmentally friendly</h5>
                    <p>
                      Intiam eu sagittis est, at commodo lacini libero. Praesent
                      dignissim sed odio vel aliquam manta lagorn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="border-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
