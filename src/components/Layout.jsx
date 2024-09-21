import React, { useContext, useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import { themeContext, ThemeContext } from "../context/ThemeContext";
import Sidebar from "./Sidebar";
import MenuContextProvider from "../context/MenuContext";

const Layout = () => {
  const context = useContext(themeContext);
  useState(()=>{
    localStorage.setItem('isDark',true)
  },[])
  return (
    <MenuContextProvider>
        <div className={`min-h-screen ${context?.isDark ? 'bg-primary' : 'bg-[#eeeef0]'}`}>
          <div className="max-w-[1000px] mx-auto pt-3">
            <Header />
            <div className="pt-[10px] pb-3 lg:mx-auto mx-[20px]">
              <div className="flex sm:flex-row flex-col gap-3">
                <Sidebar />
                <div className="sm:w-2/3 w-full">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
    </MenuContextProvider>
  );
};

export default Layout;
