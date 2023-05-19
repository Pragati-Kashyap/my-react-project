import React from 'react';


function CategoryList() {
    const coffees = new Array(4).fill("Cactus Flower");
    const teas = new Array(4).fill("$10.99");
    return (
        <div className="category-list">
          <div className='cactus' >
            {coffees.map((coffee, index) => (
              <div key={index}>{coffee}</div>
            ))}
          </div>
          <div className='price' >
            {teas.map((tea, index) => (
              <div key={index}>{tea}</div>
            ))}
          </div>
        </div>
      );
    }

export default CategoryList;