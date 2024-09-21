import React, { useContext } from 'react'
import Profile from '../assets/profile.png'
import { RiFacebookCircleLine, RiTwitterXLine, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { themeContext } from '../context/ThemeContext';
import { SlDocs } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";




const Sidebar = () => {
  const context = useContext(themeContext);

  return (
    <div className={`sm:w-1/3 w-full h-fit rounded-[16px] shadow-mini sm:sticky top-[70px] p-4 ${context?.isDark ? 'bg-[#000000]' : 'bg-[white]'}`}>
        <div className={`rounded-[16px] overflow-hidden flex items-center justify-center pt-2 ${context?.isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
            <img src={Profile} alt="" />
        </div>
        <div className='mt-[21px]'>
          <h4 className={`text-[24px] font-semibold flex items-center gap-6 ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>Cris Rayaan <span>👋</span></h4>
          <p className='text-[16px] text-[#576076] font-medium leading-[140%]'>A Passionate <span className={`font-semibold ${context?.isDark ? 'text-dark-heading-color' : 'text-[#576076]'}`}>FrontEnd Developer</span> 🖥️ having 4+ years of Experiences.</p>
          <div className='flex items-center flex-wrap gap-2 mt-[10px]'>
            <button className='bg-senior-secondary text-[white] h-[50px] leading-[50px] rounded-[8px] px-[10px] min-w-[120px] flex items-center justify-center gap-2 w-full'><span> <SlDocs /> </span>Download Resume</button>
            {/* <button className='bg-transparent border border-[#576076] text-[#576076] h-[50px] leading-[50px] rounded-[8px] px-[10px] min-w-[150px] flex items-center gap-2'><span><LuCopy/></span> Copy Email</button> */}
          </div>
          <div className='flex items-center justify-center gap-1 mt-[10px]'>
              <span className={`w-[40px] h-[40px] leading-[40px] text-center rounded-[8px] flex items-center justify-center ${context?.isDark ? 'bg-[#0E1018] border-none text-[#64748b]' : 'bg-transparent border border-[#dbdfe5]'}`}><RiFacebookCircleLine /></span>
              <span className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${context?.isDark ? 'bg-[#0E1018] border-none text-[#64748b]' : 'bg-transparent border border-[#dbdfe5]'}`}><RiTwitterXLine /></span>
              <span className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${context?.isDark ? 'bg-[#0E1018] border-none text-[#64748b]' : 'bg-transparent border border-[#dbdfe5]'}`}><RiGithubFill /></span>
              <span className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${context?.isDark ? 'bg-[#0E1018] border-none text-[#64748b]' : 'bg-transparent border border-[#dbdfe5]'}`}><RiLinkedinBoxFill /></span>
              <span className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${context?.isDark ? 'bg-[#0E1018] border-none text-[#64748b]' : 'bg-transparent border border-[#dbdfe5]'}`}><MdOutlineEmail /></span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar