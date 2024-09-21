import React, { useContext } from 'react'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { LuUserSquare } from 'react-icons/lu'
import { RiHome6Line } from 'react-icons/ri'
import { TbPencilBolt } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { themeContext } from '../context/ThemeContext'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BsBoxArrowInUpRight, BsMoonStarsFill } from 'react-icons/bs'
import { IoIosSunny } from 'react-icons/io'

const MobileNav = () => {
    const context = useContext(themeContext);
    const handlClick = ()=>{
        context.handleTheme()
      }

  return (
    <div className="flex flex-col fixed left-0 bottom-0 top-0 w-[250px] z-[120] bg-[white] px-6 py-4">
      <NavLink to={"/"} className="uppercase text-2xl font-semibold">
        Ashraf <span className="text-senior-secondary">Jamal</span>
      </NavLink>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col justify-between gap-4 mt-4">
          <NavLink
            to={"/"}
            className="flex items-center gap-2 rounded-[8px] px-2"
            style={({ isActive }) => ({
              color: isActive ? "#1a1f2c" : "#576076",
              fontWeight: isActive ? "600" : "400",
              backgroundColor: isActive ? "#f0f2f5" : "",
              padding: isActive ? "8px" : "",
            })}
          >
            <RiHome6Line /> <span>Home</span>
          </NavLink>
          <NavLink
            to={"/about"}
            className="flex items-center gap-2 rounded-[8px] px-2"
            style={({ isActive }) => ({
              color: isActive ? "#1a1f2c" : "#576076",
              fontWeight: isActive ? "500" : "400",
              backgroundColor: isActive ? "#f0f2f5" : "",
              padding: isActive ? "8px" : "",
            })}
          >
            <LuUserSquare /> <span>About</span>
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className="flex items-center gap-2 rounded-[8px] px-2"
            style={({ isActive }) => ({
              color: isActive ? "#1a1f2c" : "#576076",
              fontWeight: isActive ? "500" : "400",
              backgroundColor: isActive ? "#f0f2f5" : "",
              padding: isActive ? "8px" : "",
            })}
          >
            <MdOutlineWorkOutline /> <span>Portfolio</span>
          </NavLink>
          <NavLink
            to={"/blog"}
            className="flex items-center gap-2 rounded-[8px] px-2"
            style={({ isActive }) => ({
              color: isActive ? "#1a1f2c" : "#576076",
              fontWeight: isActive ? "500" : "400",
              backgroundColor: isActive ? "#f0f2f5" : "",
              padding: isActive ? "8px" : "",
            })}
          >
            <TbPencilBolt /> <span>Blog</span>
          </NavLink>
          <NavLink
            to={"/contact"}
            className="flex items-center gap-2 rounded-[8px] px-2"
            style={({ isActive }) => ({
              color: isActive ? "#1a1f2c" : "#576076",
              fontWeight: isActive ? "500" : "400",
              backgroundColor: isActive ? "#f0f2f5" : "",
              padding: isActive ? "8px" : "",
            })}
          >
            <HiOutlineChatBubbleBottomCenterText /> <span>Contact</span>
          </NavLink>
          <span
            className={`flex items-center px-2 text-lg ${
              context.isDark ? "text-[#FD7E41]" : "text-primary"
            }`}
            onClick={handlClick}
          >
            {context?.isDark ? <IoIosSunny /> : <BsMoonStarsFill />}
          </span>
        </div>
        <button className="max-w-xs bg-primary flex items-center justify-between py-2 px-3 rounded-[12px] text-white gap-3 font-semibold hover:shadow-mini transition-all duration-300">
          Let's Talk <BsBoxArrowInUpRight />
        </button>
      </div>
    </div>
  );
}

export default MobileNav