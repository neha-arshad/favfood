"use client";
import Navbar from "./Component/Navbar";
import Explore from "./ExploreMenu/Explore";
import Header from "./Component/Header";
import { useState } from "react";
import FoodDisplay from "./Food/FoodDisplay";
import Footer from "./Footer/Footer";
import Login from "./Loginpopup/Login";

export default function Home() {
  const [Category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
    
      <main>
        <Navbar setShowLogin={setShowLogin} />

        <Header />
        <Explore Category={Category} setCategory={setCategory} />
        <FoodDisplay Category={Category} />
      </main>
      <Footer />
    </>
  );
}
