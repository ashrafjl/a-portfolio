import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import {ThemeContextProvider}  from "./context/ThemeContext";
import MobilePage from "./pages/MobilePage";
import MenuContextProvider from "./context/MenuContext";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement:<Error />
  },
]);

const newRouter = createBrowserRouter([
  {
    path:'/',
    element:(<ThemeContextProvider>
      <MobilePage />
    </ThemeContextProvider>),
    errorElement:<Error />
  }
])
const App = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);
  return (
    <>
      {deviceType === "desktop" && <RouterProvider router={router} />}
      {deviceType === "mobile" && (<RouterProvider router={newRouter}/>
          
      )}
    </>
  );
};

export default App;
