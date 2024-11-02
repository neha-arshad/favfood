"use client";
import React, { useContext } from "react";
import { storeContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem";
import "./FoodDisplay.css";

interface FoodDisplayProp {
  Category: string;
}

const FoodDisplay: React.FC<FoodDisplayProp> = ({ Category }) => {
  const foodContext = useContext(storeContext);

  // Handle null context scenario
  if (!foodContext) {
    return <p>No food items available</p>;
  }

  const { food_List } = foodContext;

  return (
    <div className="food-Display" id="food-Display">
      <h1>Top Fav Dishes</h1>
      <div className="food-display-list">
        {food_List.map((item, index) => {
          if (Category === "All" || Category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
