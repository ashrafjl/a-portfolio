import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { themeContext } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import PROJECT_IMG1 from "../assets/images/project-1.png";
import PROJECT_IMG2 from "../assets/images/project-2.png";
import PROJECT_IMG3 from "../assets/images/project-3.png";

const projects = [
  {
    id: 1,
    title: "Ecommerce WebApp",
    subTitle: "ReactJs, Tailwind, CSS",
    image: PROJECT_IMG1,
  },
  {
    id: 2,
    title: "Chat App",
    subTitle: "ReactJs, Tailwind, CSs",
    image: PROJECT_IMG2,
  },
  {
    id: 3,
    title: "Expense Tracker App",
    subTitle: "ReactJs, Tailwind, CSs",
    image: PROJECT_IMG3,
  },
];

const Portfolio = () => {
  const context = useContext(themeContext);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <Card>
      <h4
        className={`font-semibold text-[40px] ${
          context?.isDark ? "text-dark-heading-color" : "text-primary"
        }`}
      >
        Check Out My <span className="text-senior-secondary">Projects</span>
      </h4>
      <p className={`text-lg text-light-black`}>
        I'm here to help if you're searching for a Frontend Developer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>
      {projects?.map((pro) => {
        return (
          <div className="mt-4 overflow-hidden" key={pro?.id}>
            <div className="rounded-[10px] overflow-hidden">
              <img src={pro?.image} alt="" />
            </div>
            <div className="mt-2 mb-2">
              <h4 className={`text-[25px] ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>{pro?.title}</h4>
              <div className="flex flex-wrap gap-2">
                {
                  pro?.subTitle.split(',').map((item)=> <span className={`bg-light-bg text-secondary p-2 rounded-[8px]`}>{item}</span>)
                }
              </div>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default Portfolio;
