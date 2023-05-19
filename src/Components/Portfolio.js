import React from "react";
import { PhotoAlbum } from "react-photo-album";


function PortfolioNav(props) {
    const [activeCategory, setActiveCategory] = React.useState("all");
  
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
            src: "https://themewagon.github.io/alazea/img/bg-img/16.jpg",
            width: 1600,
            height: 1700
        },
        {
            src: "https://themewagon.github.io/alazea/img/bg-img/17.jpg",
            width: 1600,
            height: 1700
        },
        {
          src: "https://themewagon.github.io/alazea/img/bg-img/18.jpg",
          width: 1600,
          height: 1700
      },
      {
        src :"https://themewagon.github.io/alazea/img/bg-img/19.jpg",
        width: 1600,
        height: 1700
      },
      {
    src : "https://themewagon.github.io/alazea/img/bg-img/20.jpg",
    width : 778,
    height : 700
      },
      {
        src : "https://themewagon.github.io/alazea/img/bg-img/21.jpg",
        width : 760,
        height : 700
      },{
        src : "https://themewagon.github.io/alazea/img/bg-img/22.jpg",
        width : 1600,
        height: 700
      }
    ];
    return(
        <section className = "Portfolio" >
        <div className = "Container">
     
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
    <PhotoAlbum layout="rows" photos={photos} />
    </div>
        </section>
    )
}

export default PortfolioNav;