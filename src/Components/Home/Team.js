import React from "react";

export default function Team () {
    const photos = [
     "https://themewagon.github.io/alazea/img/bg-img/team1.png",
     "https://themewagon.github.io/alazea/img/bg-img/team2.png",
     "https://themewagon.github.io/alazea/img/bg-img/team3.png",
     "https://themewagon.github.io/alazea/img/bg-img/team4.png"
      ]
  
      const [photoText, setPhotoText] = React.useState([
        "Joseph Corbin",
        "Tasha Deserio",
        "Cody Baker",
        "Pearl Kansas",
      ]);
      const [newPrices, setNewPrices] = React.useState([
        "CEO & Founder",
        "Garden Designer",
        "Plan Manager",
        "Marketer",
      ]);
    
      return (
        <section className="Team">
          <div className="Container">
            <h3>Our Team</h3>
            <p>A team of dedicated professionals</p>
            <div className="photo-list">
              {photos.map((photo, index) => (
                <div key={index}>
                  <img src={photo} alt="" />
                  <p className="price team-name">{photoText[index]}</p>
                  <span className="cactus team-describe">{newPrices[index]}</span>
                 
                </div>
              ))}
           
            </div>
          </div>
         
        </section>
      );
    }
