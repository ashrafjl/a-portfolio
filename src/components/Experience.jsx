import React, { useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "../context/ThemeContext";

const skills = [
  { id: "html", title: "HTML", percentage: "90" },
  { id: "css", title: "CSS", percentage: "80" },
  { id: "javascript", title: "Javascript", percentage: "78" },
  { id: "reactjs", title: "React JS", percentage: "80" },
  { id: "nodejs", title: "Node JS", percentage: "70" },
];

const Experience = () => {
  const context = useContext(themeContext);

  return (
    <div>
      <h4
        className={`text-[28px] font-semibold pb-2 ${
          context.isDark ? "text-senior-secondary" : "text-primary"
        }`}
      >
        Work Experience
      </h4>
      <div className="border-l-[6px] border-light-bg pl-6">
        <div className="bg-light-bg p-4 rounded-md mb-2 relative">
          <div
            className={`absolute w-4 h-4 rounded-full left-[-35.5px] top-[26px] z-10 ${
              context.isDark ? "bg-senior-secondary" : "bg-primary"
            }`}
          ></div>
          <div className="absolute w-8 h-1 bg-light-bg left-[-30px] top-8"></div>
          <div>
            <h2 className="sm:text-[26px] text-[20px] font-semibold">
              Kellton Tech Solutions
            </h2>
            <p className="sm:text-[18px] text-[16] font-semibold">
              Software Engineer {"(2022 - 2025)"}
            </p>
          </div>
          <div className="border-t border-[#e3e9ed] mt-6 pt-3">
            <p>
              At{" "}
              <a href="https://www.kellton.com" target="_blank">
                <strong>Kellton Tech Solutions</strong>
              </a>
              , I am currently working as a Software Engineer, specializing in
              frontend development. My role involves creating dynamic,
              user-friendly web applications and enhancing user interfaces using
              modern web technologies. I collaborate with cross-functional teams
              to deliver high-quality solutions that meet client requirements
              and improve user experience.
            </p>
          </div>
        </div>
        <div className="bg-light-bg p-4 rounded-md mb-2 relative">
          <div
            className={`absolute w-4 h-4 rounded-full left-[-35.5px] top-[26px] z-10 ${
              context.isDark ? "bg-senior-secondary" : "bg-primary"
            }`}
          ></div>
          <div className="absolute w-8 h-1 bg-light-bg left-[-30px] top-8"></div>
          <div>
            <h2 className="sm:text-[26px] text-[20px] font-semibold">
              Capital Technology
            </h2>
            <p className="sm:text-[18px] text-[16] font-semibold">
              Web Developer {"(2019 - 2022)"}
            </p>
          </div>
          <div className="border-t border-[#e3e9ed] mt-6 pt-3">
            <p>
              At{" "}
              <a href="https://capitaltechnology.org" target="_blank">
                {" "}
                <strong>Capital Technology</strong>{" "}
              </a>
              , I worked as a Web Developer, where I developed a variety of
              websites including blogs, eCommerce platforms, and Learning
              Management Systems {"(LMS)"}. My responsibilities included
              designing and implementing responsive, user-centric web solutions,
              ensuring seamless functionality, and optimizing performance to
              enhance the user experience.
            </p>
          </div>
        </div>
      </div>
      <h4
        className={`text-[28px] mt-6 font-semibold pb-2 ${
          context.isDark ? "text-senior-secondary" : "text-primary"
        }`}
      >
        My Expertise
      </h4>
      <div className="pl-8">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="mb-4">
              <h4 className={`pb-2 ${context.isDark ? 'text-light-bg' : 'text-primary'}`}>{skill.title}</h4>
              <div className="w-full h-2 bg-light-bg rounded-md relative">
                <div
                  className={`h-2 bg-senior-secondary rounded-md transition-all duration-500`}
                  style={{width: `${skill.percentage}%`}}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
