import { React, useState, useEffect } from "react";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Services() {
  const getStoredHeading = () => {
    const storedHeading = localStorage.getItem("heading");
    return storedHeading
      ? storedHeading.split(",")
      : ["Plants Care", "Pressure Washing", "Tree Service & Trimming"];
  };

  const [heading, setHeading] = useState(getStoredHeading);
  const [isEditable, setIsEditable] = useState([false, false, false]);
  const [newHeadings, setNewHeadings] = useState([""], [""], [""]);
  const user = useSelector(selectUser);

  useEffect(() => {
    localStorage.setItem("heading", heading.join(","));
  }, [heading]);

  const handleEdit = () => {
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[0] = true;
      return updatedEditable;
    });
    setNewHeadings((prevState) => {
      const updatedNewHeadings = [...prevState];
      updatedNewHeadings[0] = heading[0];
      return updatedNewHeadings;
    });
  };

  const handleSave = () => {
    setHeading((prevState) => {
      const updatedHeadings = [...prevState];
      updatedHeadings[0] = newHeadings[0];
      localStorage.setItem("heading", updatedHeadings.join(","));
      return updatedHeadings;
    });
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[0] = false;
      return updatedEditable;
    });
  };

  const handleChange = (index, event) => {
    setNewHeadings((prevState) => {
      const updatedNewHeadings = [...prevState];
      updatedNewHeadings[0] = event.target.value;
      return updatedNewHeadings;
    });
  };

  const uhandleEdit = () => {
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[1] = true;
      return updatedEditable;
    });
    setNewHeadings((prevState) => {
      const updatedNewHeadings = [...prevState];
      updatedNewHeadings[1] = heading[1];
      return updatedNewHeadings;
    });
  };

  const uhandleSave = () => {
    setHeading((prevState) => {
      const updatedHeadings = [...prevState];
      updatedHeadings[1] = newHeadings[1];
      return updatedHeadings;
    });
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[1] = false;
      return updatedEditable;
    });
  };

  const uhandleChange = (index, event) => {
    setNewHeadings((prevState) => {
      const updatedNewHeadings = [...prevState];
      updatedNewHeadings[1] = event.target.value;
      return updatedNewHeadings;
    });
  };
  const vhandleEdit = () => {
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[2] = true;
      return updatedEditable;
    });
    setNewHeadings((prevState) => {
      const updatedNewHeadings = [...prevState];
      updatedNewHeadings[2] = heading[2];
      return updatedNewHeadings;
    });
  };

  const vhandleSave = () => {
    setHeading((prevState) => {
      const updatedHeadings = [...prevState];
      updatedHeadings[2] = newHeadings[2];
      return updatedHeadings;
    });
    setIsEditable((prevState) => {
      const updatedEditable = [...prevState];
      updatedEditable[2] = false;
      return updatedEditable;
    });
  };

  const vhandleChange = (index, event) => {
    setNewHeadings((prevState) => {
      const updatedNewHeadings = [...prevState];
      updatedNewHeadings[2] = event.target.value;
      return updatedNewHeadings;
    });
  };
  
  const [para, setPara] =
    useState(`In Aenean purus, pretium sito amet sapien denim moste
  consectet sedoni urna placerat sodales.service its.`);

  const handleHeadingChange = (index, value) => {
    const updatedHeadings = [...heading];
    updatedHeadings[index] = value;
    setHeading(updatedHeadings);
  };
  return (
    <section class="services-area">
      <div class="Container">
        <div class="row ">
          <div class="col-12">
            {" "}
            <div class="section-heading text-center">
              <h2>OUR SERVICES</h2>
              <p>We provide the perfect service for you.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-12 col-lg-5">
            <div class="alazea-service-area mb-100">
              <div class="single-service-area d-flex  align-items-center ">
                <div class="service-icon mr-30">
                  <img
                    src="https://themewagon.github.io/alazea/img/core-img/s1.png"
                    alt=""
                  />
                </div>
                <div class="service-content">
                  <h5>{heading[0]}</h5>
                  {/* {user && handleEdit && isEditable[0] && (
                    <input
                      type="text"
                      value={newHeadings[0]}
                      onChange={(event) => handleChange([0], event)}
                    />
                  )}
                  {user && isEditable[0] ? (
                    <button onClick={() => handleSave([0])}>Save</button>
                  ) : {user && (
                    <button onClick={() => handleEdit([0])}>Edit</button>
                  )}} */}
                  {user && (
                    <div>
                      {isEditable[0] ? (
                        <div className="editable">
                          <input
                            className="form-input-edit"
                            type="text"
                            value={newHeadings[0]}
                            onChange={(event) => handleChange([0], event)}
                          />
                          <button
                            className="alazea-btn edit"
                            onClick={() => handleSave([0])}
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <button
                          className="alazea-btn"
                          onClick={() => handleEdit([0])}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  )}
                  <p>{para}</p>
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
                  <h5>{heading[1]}</h5>
                  {user && (
                    <div>
                      {isEditable[1] ? (
                        <div className="editable">
                          <input
                            className="form-input-edit"
                            type="text"
                            value={newHeadings[1]}
                            onChange={(event) => uhandleChange([1], event)}
                          />
                          <button
                            className="alazea-btn"
                            onClick={() => uhandleSave([1])}
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <button
                          className="alazea-btn"
                          onClick={() => uhandleEdit([1])}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  )}
                  <p>{para}</p>
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
                  <h5>{heading[2]}</h5>
                  {user && (
                    <div>
                      {isEditable[2] ? (
                        <div className="editable">
                          <input
                            className="form-input-edit"
                            type="text"
                            value={newHeadings[2]}
                            onChange={(event) => vhandleChange([2], event)}
                          />
                          <button
                            className="alazea-btn"
                            onClick={() => vhandleSave([2])}
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <button
                          className="alazea-btn"
                          onClick={() => vhandleEdit([2])}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  )}
                  <p>{para}</p>
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
