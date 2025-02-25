import React, { useContext } from "react";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { LuUserSquare } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { TbPencilBolt } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";

const MobileNav = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return null;
  }
  const handlClick = () => {
    context.handleTheme();
  };

  return (
    <header
      className={`sm:rounded-[16px] rounded-b-[16px] shadow-mini py-3 sticky top-[1px] max-w-[1000px] lg:mx-auto mx-[20px] z-50 ${
        context?.isDark ? "bg-[#000000]" : "bg-[#FFF]"
      }`}
    >
      <div className="flex items-center justify-between px-[20px]">
        <div className="text-xl font-semibold text-senior-secondary"><span className={`${context?.isDark ? 'text-white' : 'text-primary'}`}>Ashraf</span> Jamal</div>
        <span onClick={handlClick} className={`flex items-center text-lg ${
                context.isDark ? "text-[#FD7E41]" : "text-primary"
              }`}>
          {context?.isDark ? <IoIosSunny /> : <BsMoonStarsFill />}
        </span>
      </div>
    </header>
  );
};

export default MobileNav;
