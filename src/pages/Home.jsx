import React, { useContext } from "react";
import Card from "../components/Card";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaArrowRight,
} from "react-icons/fa";
import CAPITAL_LOGO from "../assets/images/capitaltechnology.png";
import KELLTON_LOGO from "../assets/images/kellton.png";
import PROJECT_IMG1 from "../assets/images/project-1.png";
import PROJECT_IMG2 from "../assets/images/project-2.png";
import { themeContext } from "../context/ThemeContext";

const skills = [
  { id: 1, title: "HTML", image: <FaHtml5 />, color: "#DD4B25" },
  { id: 2, title: "CSS", image: <FaCss3 />, color: "#3595CF" },
  { id: 3, title: "JS", image: <FaJsSquare />, color: "#FFD02F" },
  { id: 4, title: "ReactJS", image: <FaReact />, color: "#00D1F7" },
  { id: 5, title: "NextJS", image: <RiNextjsLine />, color: "#000000" },
  { id: 6, title: "Tailwind", image: <RiTailwindCssFill />, color: "#07B0CE" },
];

const Home = () => {
  const context = useContext(themeContext)
  return (
    <div className="flex sm:flex-row flex-col w-full gap-3">
      <div className="sm:w-1/2 w-full">
        <div className="">
          <Card>
            <h4 className={`text-[24px] font-semibold ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>
              Work Experience
            </h4>
            <div className="w-full mt-[15px]">
              <div className="flex items-center w-full gap-4">
                <div>
                  <p className="text-sm font-medium text-light-black">
                    2022 - 2024
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[40px] h-[40px] bg-[#f0f2f5] flex items-center justify-center overflow-hidden rounded-[8px]">
                    <img
                      src={KELLTON_LOGO}
                      alt=""
                      className="w-[32px] h-[32px] object-contain object-center"
                    />
                  </div>
                  <div>
                    <h5 className={`text-[16px] font-semibold m-0 ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>
                      Kellton
                    </h5>
                    <h5 className="text-sm text-[#576076] font-normal m-0">
                      Software Engineer
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-4 mt-[15px]">
                <div>
                  <p className="text-sm font-medium text-[#576076]">
                    2019 - 2022
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[40px] h-[40px] bg-[#f0f2f5] flex items-center justify-center overflow-hidden rounded-[8px]">
                    <img
                      src={CAPITAL_LOGO}
                      alt=""
                      className="w-[32px] h-[32px] object-contain object-center"
                    />
                  </div>
                  <div>
                    <h5 className={`text-[16px] font-semibold m-0 ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>
                      Capital Technology
                    </h5>
                    <h5 className="text-sm text-[#576076] font-normal m-0">
                      Web Developer
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-[10px]">
          <Card>
            <h4 className={`text-[24px] font-semibold ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>
              My Expertise
            </h4>
            <div>
              <div className="flex items-center flex-wrap w-full gap-2 justify-between mt-[15px]">
                {skills?.map((skill) => {
                  return (
                    <div className="" key={skill?.id + skill?.title}>
                      <div className={`w-[90px] h-[60px] flex items-center justify-center rounded-[8px] overflow-hidden ${context?.isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                        <span
                          className={`flex items-center justify-center text-[32px] text-[${skill.color}]`}
                          style={{
                            color:skill.color
                          }}
                        >
                          {skill?.image}
                        </span>
                      </div>
                      <h4 className={`text-[16px] mt-2 font-medium text-center ${context?.isDark ? 'text-light-black' : 'text-primary'}`}>
                        {skill?.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-[6px]">
              <h4 className={`text-[16px] text-end cursor-pointer ${context?.isDark ? 'text-light-black' : 'text-primary'}`}>
                View All
              </h4>
            </div>
          </Card>
        </div>
      </div>
      <div className="sm:w-1/2 w-full">
        <Card>
          <h4 className={`text-[24px] font-semibold ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>
            Recent Projects
          </h4>
          <div className="rounded-[8px] overflow-hidden mt-[15px]">
            <img src={PROJECT_IMG1} alt="" />
          </div>
          <div className="rounded-[8px] overflow-hidden mt-[13px]">
            <img src={PROJECT_IMG2} alt="" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
