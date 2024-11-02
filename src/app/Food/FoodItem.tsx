"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { storeContext } from "../Context/StoreContext";

interface FoodItemsProp {
  id: number;
  name: string;
  price: any;
  description: string;
  image: string;
}

const FoodItem: React.FC<FoodItemsProp> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const [itemCount, setItemCount] = useState(0);

  const context = useContext(storeContext);

  if (!context) {
    throw new Error(
      "storeContext is not available. Make sure StoreContextProvider is wrapping this component."
    );
  }

  const { cartItem, addCart, removeCart } = context;

  const handleAddToCart = () => {
    addCart(id);
    setItemCount((prev) => prev + 1);
  };

  const handleRemoveFromCart = () => {
    removeCart(id);
    setItemCount((prev) => prev - 1);
  };

  return (
    <div className="food-item">
      <div className="food-item-container">
        <img className="food-item-image" src={image} alt="Food item" />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={handleAddToCart}
            src="/Images/add_icon.png"
            alt="add_icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={handleRemoveFromCart}
              src="/Images/remove_icon_red.png"
              alt="remove_icon"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={handleAddToCart}
              src="/Images/add_icon_green.png"
              alt="add_icon_green"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src="/Images/rating_starts.png" alt="rating-star" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
