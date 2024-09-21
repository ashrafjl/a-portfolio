import React, { useContext, useState } from "react";
import { themeContext } from "../context/ThemeContext";

const Tabs = ({ handleTab, tabs }) => {
    const context = useContext(themeContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (id)=>{
      setCurrentIndex(id)
    }

  return (
    <div className="w-full flex items-center gap-2">
      {tabs?.map((tab) => {
        return (
          <div key={tab?.id} className={`p-2 rounded-[8px] min-w-[100px] ${context?.isDark ? 'bg-dark-bg text-[white]' : 'bg-light-bg text-light-black'}`} onClick={()=> handleClick(tab?.id)}>
            <p className="text-center">{tab?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
