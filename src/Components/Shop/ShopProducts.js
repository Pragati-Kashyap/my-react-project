import { React, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import ProductsAll from "./ProductsAll";

export default function ShopProducts() {
  const PlantCheckbox = ({ id, label, count }) => (
    <div className="custom-checkbox d-flex align-items-center mb-2">
      <input type="checkbox" className="custom-control-input" id={id} />
      <div className="custom" htmlFor={id}>
        {label} <span className="text-muted">({count})</span>
      </div>
    </div>
  );

  const SortCheckBox = ({ id, label }) => (
    <div className="custom-checkbox d-flex align-items-center mb-2">
      <input type="checkbox" className="custom-control-input" id={id} />
      <div className="custom" htmlFor={id}>
        {label}
      </div>
    </div>
  );
  const BestSeller = ({ id, img, heading, price }) => (
    <div className="bestseller d-flex align-items-center mb-2">
      <div className="bestproduct-img" id={id}>
        <img src= {img} />
      </div>
      <div className="bestproduct-info" htmlFor={id}>
        <p className="name-of-product">{heading}</p>
        <p className="product-price">{price}</p>
        <div class="ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
      </div>
    </div>
  );
  const checkboxData = [
    { id: "customCheck1", label: "All plants", count: 72 },
    { id: "customCheck2", label: "Outdoor plants", count: 20 },
    { id: "customCheck3", label: "Indoor plants", count: 15 },
    { id: "customCheck4", label: "Office Plants", count: 20 },
    { id: "customCheck5", label: "Potted", count: 15 },
    { id: "customCheck6", label: "Others", count: 2 },
  ];
  const sortBoxData = [
    { id: 1, label: "New Arrivals" },
    { id: 2, label: "Alphabetically, A-Z" },
    { id: 3, label: "Alphabetically, Z-A" },
    { id: 4, label: "Price: low to high" },
    { id: 5, label: "Price: high to low" },
  ];
  const bestSellerData = [
    {id : 1,src : "https://themewagon.github.io/alazea/img/bg-img/4.jpg", heading: "Cactus Flower", price : "$10.99" },
    {id : 2,src : "https://themewagon.github.io/alazea/img/bg-img/5.jpg", heading: "Tulip Flower", price : "$11.99" },
    {id : 3,src : "https://themewagon.github.io/alazea/img/bg-img/34.jpg", heading: "Recuirdos Plant", price : "$9.99" },
  ]
  const [value, setValue] = useState(0);
  return (
    <div className="container">
      <div className="row breadcrumb">
        <div className="col-12 col-md-4 col-lg-3 widget-title p-0">
          <div className="shop-side-widget">
            <h4>Prices</h4>
            <RangeSlider
              className="custom-slider"
              variant="success"
              value={value}
              onChange={(changeEvent) => setValue(changeEvent.target.value)}
              tooltipLabel={(value) => `PRICE: $8-$${value}`}
            />
          </div>
          <div className="shop-side-widget">
            <h4>categories</h4>
            <div className="widget-desc">
              {checkboxData.map((checkbox) => (
                <PlantCheckbox
                  key={checkbox.id}
                  id={checkbox.id}
                  label={checkbox.label}
                  count={checkbox.count}
                />
              ))}
            </div>
          </div>
          <div className="shop-side-widget">
            <h4>Sort By</h4>
            <div className="widget-desc">
              {sortBoxData.map((checkbox) => (
                <SortCheckBox
                  key={checkbox.id}
                  id={checkbox.id}
                  label={checkbox.label}
                />
              ))}
            </div>
          </div>
          <div className="shop-side-widget">
            <h4>bestseller</h4>
            <div className="widget-desc">
              {bestSellerData.map((checkbox) => (
                <BestSeller
                  key={checkbox.id}
                  id={checkbox.id}
                  heading={checkbox.heading}
                  price = {checkbox.price}
                  img = {checkbox.src}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
            <ProductsAll />
        </div>
      </div>
    </div>
  );
}
