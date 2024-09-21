import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = ()=>{
      if(window.innerWidth > 640){
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MenuContext.Provider value={{ isOpen, handleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
export const useMenuContext = () => useContext(MenuContext);
export default MenuContextProvider;
