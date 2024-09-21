import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { LuUserSquare } from "react-icons/lu";
import { MdOutlineWorkOutline, MdOutlineMenu, MdClose } from "react-icons/md";
import { TbPencilBolt } from "react-icons/tb";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsMoonStarsFill, BsBoxArrowInUpRight } from "react-icons/bs";
import { themeContext } from "../context/ThemeContext";
import { IoIosSunny } from "react-icons/io";
import { useMenuContext } from "../context/MenuContext";
import MobileNav from "./MobileNav";


const Header = () => {
    const context = useContext(themeContext);
    const { isOpen, handleMenu } = useMenuContext()
    console.log(context?.isDark);
    
    const handlClick = ()=>{
      context.handleTheme()
    }
    const handleMenuIcon = ()=>{
      handleMenu()
    }
  return (
    <>
    <header className={`sm:rounded-[16px] rounded-b-[16px] shadow-mini py-3 sticky top-[1px] max-w-[1000px] lg:mx-auto mx-[20px] z-50 ${context?.isDark ? 'bg-[#000000]' : 'bg-[#FFF]'}`}>
      <div className="flex items-center justify-between gap-5 flex-wrap px-3">
        <NavLink to={"/"} className={`uppercase text-2xl font-semibold ${context?.isDark ? 'text-[white]' : 'text-primary'}`}>
          Ashraf <span className="text-senior-secondary">Jamal</span>
        </NavLink>
        <div className="sm:flex hidden items-center gap-3 justify-between flex-wrap w-3/4">
          <NavLink
            to={"/"}
            className={`flex items-center gap-2 rounded-[8px]`}
            style={({ isActive }) => ({
              color: isActive && !context?.isDark ? "#1a1f2c" : context?.isDark &&  isActive ? 'white' : '#576076',
              fontWeight: isActive ? "600" : "400",
              backgroundColor: isActive && !context?.isDark ? "#f0f2f5" : context?.isDark &&  isActive ? '#0E1018' : '',
              padding: isActive ? "8px" : "",
            })}
          >
            <RiHome6Line /> <span>Home</span>
          </NavLink>
          <NavLink
            to={"/about"}
            className={`flex items-center gap-2 rounded-[8px]`}
            style={({ isActive }) => ({
              color: isActive && !context?.isDark ? "#1a1f2c" : context?.isDark &&  isActive ? 'white' : '#576076',
              fontWeight: isActive ? "600" : "400",
              backgroundColor: isActive && !context?.isDark ? "#f0f2f5" : context?.isDark &&  isActive ? '#0E1018' : '',
              padding: isActive ? "8px" : "",
            })}
          >
            <LuUserSquare /> <span>About</span>
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={`flex items-center gap-2 rounded-[8px]`}
            style={({ isActive }) => ({
              color: isActive && !context?.isDark ? "#1a1f2c" : context?.isDark &&  isActive ? 'white' : '#576076',
              fontWeight: isActive ? "600" : "400",
              backgroundColor: isActive && !context?.isDark ? "#f0f2f5" : context?.isDark &&  isActive ? '#0E1018' : '',
              padding: isActive ? "8px" : "",
            })}
          >
            <MdOutlineWorkOutline /> <span>Portfolio</span>
          </NavLink>
          <NavLink
            to={"/blog"}
            className={`flex items-center gap-2 rounded-[8px]`}
            style={({ isActive }) => ({
              color: isActive && !context?.isDark ? "#1a1f2c" : context?.isDark &&  isActive ? 'white' : '#576076',
              fontWeight: isActive ? "600" : "400",
              backgroundColor: isActive && !context?.isDark ? "#f0f2f5" : context?.isDark &&  isActive ? '#0E1018' : '',
              padding: isActive ? "8px" : "",
            })}
          >
            <TbPencilBolt /> <span>Blog</span>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={`flex items-center gap-2 rounded-[8px]`}
            style={({ isActive }) => ({
              color: isActive && !context?.isDark ? "#1a1f2c" : context?.isDark &&  isActive ? 'white' : '#576076',
              fontWeight: isActive ? "600" : "400",
              backgroundColor: isActive && !context?.isDark ? "#f0f2f5" : context?.isDark &&  isActive ? '#0E1018' : '',
              padding: isActive ? "8px" : "",
            })}
          >
            <HiOutlineChatBubbleBottomCenterText /> <span>Contact</span>
          </NavLink>
          <span
            className={`flex items-center text-lg ${
              context.isDark ? "text-[#FD7E41]" : "text-primary"
            }`}
            onClick={handlClick}
          >
            {context?.isDark ? <IoIosSunny /> : <BsMoonStarsFill />}
          </span>
          <button className="max-w-xs bg-primary flex items-center justify-between py-2 px-3 rounded-[12px] text-white gap-3 font-semibold hover:shadow-mini transition-all duration-300">
            Let's Talk <BsBoxArrowInUpRight />
          </button>
        </div>
        <div className="sm:hidden block">
          <span
            className="text-primary text-[25px] cursor-pointer"
            onClick={handleMenuIcon}
          >
            {!isOpen ? <MdOutlineMenu /> : <MdClose />}
          </span>
        </div>
      </div>
    </header>
    {
      isOpen && <div className={`overflow-hidden tranistion-all duration-200 ${isOpen ? 'w-full' : 'w-0'}`}>
        <MobileNav />
      </div>
    }
    </>
  );
};

export default Header;
