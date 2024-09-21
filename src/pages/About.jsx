import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { themeContext } from "../context/ThemeContext";
import CountUp from "../components/CountUp";
import Tabs from "../components/Tabs";
import Skills from "../components/Skills";

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
        <div className="max-w-[400px] mt-[30px]">
          <p className="text-[24px] text-[#576076] font-medium leading-[140%]">
            A passionate 
            <span
              className={`font-semibold ${
                context?.isDark ? "text-dark-heading-color" : "text-[#576076]"
              }`}
            >
              {" "}FrontEnd Developer
            </span>{" "}
            🖥️ dedicated to creating beautiful, user-friendly websites and applications that not only look great but also perform flawlessly.
          </p>
        </div>
        <div className="mt-[30px]">
          <h4 className={`text-[24px] ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>Skills</h4>
        </div>
        <div>
            <Skills />
        </div>
      </div>
    </Card>
  );
};

export default About;
