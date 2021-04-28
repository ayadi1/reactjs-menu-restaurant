import React from 'react';

const Menu = ({ Shakes, Lunch, Break,all }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={all}>
        All
      </button>
      <button className="filter-btn" onClick={Break}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={Lunch}>
        Lunch
      </button>
      <button className="filter-btn" onClick={Shakes}>
        Shakes
      </button>
    </div>
  );
};

export default Menu;
