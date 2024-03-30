"use client"
import Cards from "../../public/components/Cards";
import Carousel from "../../public/components/Carousel";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme=()=>{
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={`${isDarkMode ? "dark":""}`}>
      <div className="dark:bg-[#292B32]  bg-[#F7F7F8]">
      <button className="bg-black dark:bg-white dark:text-black px-4 py-4 text-white m-4" onClick={toggleTheme}>{isDarkMode ? "LIGHT" : "DARK"}</button>
    <Cards  isDarkMode={isDarkMode} />
    <Carousel  isDarkMode={isDarkMode} />
      </div>  
    </div>
  );
}

// className={`bg-${isDarkMode ? "[#292B32]" : "white"} `}
// className={`bg-${isDarkMode ? "gradient-to-r from-[#18282A] to-[#221A2C]" : "white"}`}
