import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { themeContext } from "../context/ThemeContext";
import CountUp from "../components/CountUp";
import Tabs from "../components/Tabs";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const tabsData = [
  {id:1,title:'Languages & Frameworks'},
  {id:2,title:'Libraries'},
  {id:3,title:'Styling'},
  {id:4,title:'Development Practices'},

]

const About = () => {
  const context = useContext(themeContext);
  const [tabs, setTabs] = useState(tabsData)
  const handleTab = ()=>{
    
  }
  return (
    <Card>
      <div>
        <div className="flex justify-between">
          <h1
            className={`text-[40px] font-semibold leading-[100%] m-0 ${
              context?.isDark ? "text-dark-heading-color" : "text-primary"
            }`}
          >
            Hi, This is{" "}
            <span className="text-senior-secondary">
              Ashraf <br />
              Jamal 👋
            </span>
          </h1>
          <div
            className={`flex items-center gap-2 h-fit bg-light-bg p-2 rounded-[8px]`}
          >
            <span className="w-[10px] h-[10px] rounded-full bg-senior-secondary"></span>
            <p className="text-lg text-senior-secondary font-medium">
              Available for hire
            </p>
          </div>
        </div>
        <div className="max-w-[600px] mt-[30px]">
          <p className="text-[24px] text-[#576076] font-medium leading-[140%]">
          A versatile Full-Stack Developer 🚀 passionate about building seamless, high-performance web applications from the ground up. Combining creativity with technical expertise, I deliver end-to-end solutions that are visually stunning, user-centric, and optimized for performance across all devices.
          </p>
        </div>
        <div className="mt-8">
          <Experience />
        </div>
        {/* <div>
            <Skills />
        </div> */}
      </div>
    </Card>
  );
};

export default About;
