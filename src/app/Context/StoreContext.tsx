"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import food_List from "../Food/Foodlist";

//type for food items
interface FoodItem {
  id: number;
  image: string;
  name: string;
  category: string;
  description: string;
  price?: number;
}

interface FoodContextType {
  food_List: FoodItem[];
  cartItem: { [key: number]: number };
  addCart: (itemId: number) => void;
  removeCart: (itemId: number) => void;
}

//default value
export const storeContext = createContext<FoodContextType | null>(null);

// Context provider component
const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItem, setCartItem] = useState<{ [key: number]: number }>({});

  const addCart = (itemId: number) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeCart = (itemId: number) => {
    if (cartItem[itemId] > 1) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: 0 }));
    }
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const [foodList] = useState<FoodItem[]>(food_List); 
  return (
    <storeContext.Provider
      value={{ food_List: foodList, cartItem, addCart, removeCart }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
