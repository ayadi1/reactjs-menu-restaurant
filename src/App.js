import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [filterFood, setFilterFood] = useState(items);
  const all =()=>{
    setFilterFood(items);
  }
  const Break = () => {

    var newList = [];
    items.forEach((element) => {
      if (element.category == "breakfast") {
        newList.push(element);
      }
    });

    setFilterFood(newList);
  };
  const Lunch = () => {
    var newList = [];
    items.forEach((element) => {
      if (element.category == "lunch") {
        newList.push(element);
      }
    });

    setFilterFood(newList);
  };
  const Shakes = () => {

    var newList = [];
    items.forEach((element) => {
      if (element.category == "shakes") {
        newList.push(element);
      }
    });

    setFilterFood(newList);
  };
  return (
    <main>
      {/* {console.log(items)} */}
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Menu Break={Break} Lunch={Lunch} Shakes={Shakes} all={all} />
        <Categories foods={filterFood} />
      </section>
    </main>
  );
}

export default App;
