import React from "react";
import { PhotoAlbum } from "react-photo-album";

function PhotoPortFolio() {
  const photos = [
    {
      id: 1,
      src: "https://themewagon.github.io/alazea/img/bg-img/16.jpg",
      width: 1600,
      height: 1700,
    },
    {
      id: 2,
      src: "https://themewagon.github.io/alazea/img/bg-img/17.jpg",
      width: 2800,
      height: 1700,
    },
    {
      id: 3,
      src: "https://themewagon.github.io/alazea/img/bg-img/19.jpg",
      width: 1600,
      height: 1700,
    },
    {
      id: 4,
      src: "https://themewagon.github.io/alazea/img/bg-img/20.jpg",
      width: 1500,
      height: 1700,
    },
    {
      id: 5,
      src: "https://themewagon.github.io/alazea/img/bg-img/21.jpg",
      width: 600,
      height: 700,
    },
    {
        id: 6,
        src: "https://themewagon.github.io/alazea/img/bg-img/22.jpg",
        width: 2700,
        height: 1700,
      },
      {
        id: 7,
        src: "https://themewagon.github.io/alazea/img/bg-img/16.jpg",
        width: 3800,
        height: 1700,
      },
      {
        id: 8,
        src: "https://themewagon.github.io/alazea/img/bg-img/17.jpg",
        width: 1600,
        height: 1700,
      },
      {
        id: 9,
        src: "https://themewagon.github.io/alazea/img/bg-img/19.jpg",
        width: 1600,
        height: 1700,
      },
      {
        id: 10,
        src: "https://themewagon.github.io/alazea/img/bg-img/20.jpg",
        width: 778,
        height: 700,
      },
        {
        id: 11,
        src: "https://themewagon.github.io/alazea/img/bg-img/21.jpg",
        width: 1900,
        height: 1700,
      },
      {
        id: 12,
        src: "https://themewagon.github.io/alazea/img/bg-img/22.jpg",
        width: 3500,
        height: 1700,
      },
  ];
  return (
  <div className="container photoport">
  <h2>Our Portfolio</h2>
  <p>We devote all of our experience and efforts for creation</p>
  <div class="port-link">
                            <a class="link" >All</a>
                            <a class="link" >Coffee Design</a>
                            <a class="link">Garden</a>
                            <a class="link" >Home Design</a>
                            <a class="link">Office Design</a>
                        </div>
      <PhotoAlbum layout="rows" photos={photos} />
     
      </div>
  );
}

export default PhotoPortFolio;
