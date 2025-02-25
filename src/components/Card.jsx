import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Card = ({children}) => {
  const context = useContext(ThemeContext)
  return (
    <div className={`${context?.isDark ? 'bg-[#000000]' : 'bg-[white]'} rounded-[16px] shadow-mini p-4 w-full`}>
        {children}
    </div>
  )
}

export default Card