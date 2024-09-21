import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext';
import { TbSend } from "react-icons/tb";


const Form = () => {
    const context = useContext(themeContext);

  return (
    <div className={`p-4 rounded-[8px] ${context?.isDark ? 'bg-dark-bg' : 'bg-light-bg'} mt-2`}>
        <form className='w-full'>
            <div className='w-full'>
                <label htmlFor="name" className={`${context?.isDark ? 'text-light-bg' : 'text-primary'}`}>Name</label>
                <input type="text" className={`mt-2 border border-border focus:ring-0 w-full focus:outline-none p-3 rounded-[8px] ${context?.isDark ? 'bg-[#000000] text-light-bg border-primary' : 'text-primary'}`} 
                placeholder='Enter your name'
                />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="email" className={`${context?.isDark ? 'text-light-bg' : 'text-primary'}`}>Email</label>
                <input type="email" className={`mt-2 border border-border focus:ring-0 w-full focus:outline-none p-3 rounded-[8px] ${context?.isDark ? 'bg-[#000000] text-light-bg border-primary' : 'text-primary'}`} 
                placeholder='Enter your Email'
                />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="message" className={`${context?.isDark ? 'text-light-bg' : 'text-primary'}`}>Email</label>
                <textarea className={`mt-2 border border-border focus:ring-0 w-full focus:outline-none p-3 rounded-[8px] ${context?.isDark ? 'bg-[#000000] text-light-bg border-primary' : 'text-primary'}`} 
                placeholder='Enter your message'
                rows={4}
                ></textarea>
            </div>
            <div className='w-full mt-4'>
            <button className='bg-senior-secondary text-[white] h-[50px] leading-[50px] rounded-[8px] px-[10px] min-w-[120px] flex items-center justify-center gap-2 w-full'><span> <TbSend /> </span>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Form