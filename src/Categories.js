import React from "react";

const Categories = ({ foods }) => {
  return (
    <div className="section-center">
      {foods.map((food) => {
        return (
          <article className="menu-item" key={food.id}>
            <img className="photo" src={food.img} alt={food.title} />
            <div className="item-info">
              <header>
                <h4>{food.title}</h4>
                <h4 className="price">{food.price}</h4>
              </header>
              <p className="item-text">{food.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Categories;
