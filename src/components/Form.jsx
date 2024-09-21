import React, { useContext, useState } from 'react'
import { themeContext } from '../context/ThemeContext';
import { TbSend } from "react-icons/tb";


const Form = () => {
    const context = useContext(themeContext);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: ''
          });
      };
    

  return (
    <div className={`p-4 rounded-[8px] ${context?.isDark ? 'bg-dark-bg' : 'bg-light-bg'} mt-2`}>
        <form className='w-full' name='contact' method='POST' data-netlify="true" onSubmit={handleSubmit}>
            <div className='w-full'>
                <label htmlFor="name" className={`${context?.isDark ? 'text-light-bg' : 'text-primary'}`}>Name</label>
                <input type="text" name='name' className={`mt-2 border border-border focus:ring-0 w-full focus:outline-none p-3 rounded-[8px] ${context?.isDark ? 'bg-[#000000] text-light-bg border-primary' : 'text-primary'}`} 
                placeholder='Enter your name'
                onChange={handleChange}
                required
                value={formData?.name}
                />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="email" className={`${context?.isDark ? 'text-light-bg' : 'text-primary'}`}>Email</label>
                <input type="email" name='email' className={`mt-2 border border-border focus:ring-0 w-full focus:outline-none p-3 rounded-[8px] ${context?.isDark ? 'bg-[#000000] text-light-bg border-primary' : 'text-primary'}`} 
                placeholder='Enter your Email'
                onChange={handleChange}
                required
                value={formData?.email}
                />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="message" className={`${context?.isDark ? 'text-light-bg' : 'text-primary'}`}>Email</label>
                <textarea name='message' className={`mt-2 border border-border focus:ring-0 w-full focus:outline-none p-3 rounded-[8px] ${context?.isDark ? 'bg-[#000000] text-light-bg border-primary' : 'text-primary'}`} 
                placeholder='Enter your message'
                rows={4}
                onChange={handleChange}
                required
                value={formData?.message}
                ></textarea>
            </div>
            <div className='w-full mt-4'>
            <button className='bg-senior-secondary text-[white] h-[50px] leading-[50px] rounded-[8px] px-[10px] min-w-[120px] flex items-center justify-center gap-2 w-full' type='submit'><span> <TbSend /> </span>Send Message</button>
            {submitted && <p className={`text-lg font-semibold ${context?.isDark ? 'text-light-bg' : 'text-primary'} mt-2   `}>Message sent successfully!</p>}
            </div>
        </form>
    </div>
  )
}

export default Form