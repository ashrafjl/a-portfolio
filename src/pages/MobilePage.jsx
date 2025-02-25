import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Home from "./Home";
import Sidebar from "../components/Sidebar";
import MobileHeader from "../components/MobileHeader";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MobilePage = () => {
  const context = useContext(ThemeContext);
  useState(() => {
    localStorage.setItem("isDark", false);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        context?.isDark ? "bg-primary" : "bg-[#eeeef0]"
      }`}
    >
      <div className="max-w-[1000px] mx-auto pt-3">
        <MobileHeader />
        <div className="pt-[10px] pb-3 lg:mx-auto mx-[20px]">
          <div className="flex sm:flex-row flex-col gap-3">
            <Sidebar />
            <div className="w-full">
              <Home />
              <div className="w-full mt-4">
                <About />
              </div>
              <div className="w-full mt-4">
                <Portfolio />
              </div>
              <div className="w-full mt-4">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePage;
