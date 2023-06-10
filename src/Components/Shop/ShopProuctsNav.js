import { React } from "react";

export default function ShopProductsNav() {

  return (
    <div class="col-12 container">
      <div class="shop-sorting-data d-flex flex-wrap breadcrumb justify-content-between">
        <div class="shop-page-count">
          <p>Showing 1–9 of 72 results</p>
        </div>
        <div class="search_by_terms">
          <form action="#" method="post" class="form-inline d-flex flex-row">
            <select class="custom-select widget-title">
              <option selected="">Short by Popularity</option>
              <option value="1">Short by Newest</option>
              <option value="2">Short by Sales</option>
              <option value="3">Short by Ratings</option>
            </select>
            <select class="custom-select widget-title">
              <option selected="">Show: 9</option>
              <option value="1">12</option>
              <option value="2">18</option>
              <option value="3">24</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
