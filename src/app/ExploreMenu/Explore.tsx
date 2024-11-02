import React from "react";
import { menu_list } from "./MenuList";
import "./Explore.css";
import { Dispatch, SetStateAction } from "react";

interface ExploreProps {
  Category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const Explore: React.FC<ExploreProps> = ({ Category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Art of Cuisine</h1>
      <p className="explore-menu-text">
        First we eat, then we do everything else. Food is the ingredient that
        binds us together. Eat good, feel good, live good."
      </p>

      <div className="explore-menu-list">
        {menu_list.map((menu, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) => (prev === menu.name ? "All" : menu.name));
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={Category === menu.name ? "active" : ""}
                src={menu.image}
                alt="images"
              />
              <p>{menu.name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Explore;
