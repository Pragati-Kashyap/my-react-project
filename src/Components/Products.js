import React from "react";
import { PhotoAlbum } from "react-photo-album";
import CategoryList from "./CategoryList"


function Products(props) {
    

    const photos = [
        {
            src: "https://themewagon.github.io/alazea/img/bg-img/9.jpg",
            width: 1600,
            height: 1700,
        },
        {
            src: "https://themewagon.github.io/alazea/img/bg-img/10.jpg",
            width: 1600,
            height: 1700
        },
        {
          src: "https://themewagon.github.io/alazea/img/bg-img/11.jpg",
          width: 1600,
          height: 1700
      },
      {
        src :"https://themewagon.github.io/alazea/img/bg-img/12.jpg",
        width: 1600,
        height: 1700
      }
     
    ];
    return(
        <section className = "Products" >
        <div className = "Container">
            <h3>New Arrivals</h3>
            <p>We have the latest products, it must be exciting for you</p>

    <PhotoAlbum layout="rows" photos={photos} />
    <CategoryList />
    <div class="col-12 text-center">
                    <a href="#" class="btn alazea-btn">View All</a>
                </div>
    </div>
        </section>
    )
}

export default Products;
