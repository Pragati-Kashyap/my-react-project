import { React, useEffect, useState } from "react";
export default function Facts() {
  const counts = [20, 70, 30, 80]; // Array of counts
  const images = [
    "https://themewagon.github.io/alazea/img/core-img/cf1.png",
    "https://themewagon.github.io/alazea/img/core-img/cf2.png",
    "https://themewagon.github.io/alazea/img/core-img/cf3.png",
    "https://themewagon.github.io/alazea/img/core-img/cf4.png",
  ];
  const description = ["Awards", "Projects", "Happy Clients", "Revenue"];
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const initialCounters = counts.map(() => 0);
    setCounters(initialCounters);
    const updateCounters = () => {
      setCounters((prevCounters) => {
        const updatedCounters = prevCounters.map((counter, index) => {
          if (counter < counts[index]) {
            return counter + 1;
          }
          return counter;
        });
        return updatedCounters;
      });
    };

    const interval = setInterval(updateCounters, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="facts-area">
      <div className="container d-flex">
        {counts.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="single-cool-fact d-flex align-items-center justify-content-center mb-100">
              <div className="cf-icon">
                <img src={images[index]} alt="" />
              </div>
              <div className="cf-content">
                <h2>
                  <span className="counter">
                    {" "}
                    {index === 2
                      ? `${counters[index]}+`
                      : index === 3
                      ? `${counters[index]}K+`
                      : counters[index]}
                  </span>
                </h2>
                <h6>{description[index]}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="side-img">
            <img src = "https://themewagon.github.io/alazea/img/core-img/pot.png" /> 
        </div> 
    </div>
  );
}
