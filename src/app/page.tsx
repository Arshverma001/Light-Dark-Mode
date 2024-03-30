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
      <button className="bg-white dark:bg-gray-800 text-black dark:text-white py-2 px-4 rounded-md shadow-md transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 m-4" onClick={toggleTheme}>{isDarkMode ? "LIGHT" : "DARK"}</button>
    <Cards  isDarkMode={isDarkMode} />
    <Carousel  isDarkMode={isDarkMode} />
      </div>  
    </div>
  );
}

// className={`bg-${isDarkMode ? "[#292B32]" : "white"} `}
// className={`bg-${isDarkMode ? "gradient-to-r from-[#18282A] to-[#221A2C]" : "white"}`}
