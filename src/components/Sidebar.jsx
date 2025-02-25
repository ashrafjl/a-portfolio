import React, { useContext } from "react";
import RESUME from '../assets/ashrafupdatedresume.pdf'
import Me from "../assets/images/me.jpg";
import { FaWhatsapp } from "react-icons/fa";
import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";
import { SlDocs } from "react-icons/sl";
import { MdOutlineEmail, MdContentCopy } from "react-icons/md";

const Sidebar = () => {
  const email = import.meta.env.VITE_EMAIL;
  const phone = import.meta.env.VITE_PHONE;
  const context = useContext(ThemeContext);

  const handleCopy = () => {
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied to clipboard: " + email);
  };

  return (
    <div
      className={`sm:w-1/3 w-full h-fit rounded-[16px] shadow-mini sm:sticky top-[70px] p-4 ${
        context?.isDark ? "bg-[#000000]" : "bg-[white]"
      }`}
    >
      <div
        className={`rounded-[16px] overflow-hidden flex items-center justify-center ${
          context?.isDark ? "bg-dark-bg" : "bg-light-bg"
        }`}
      >
        <img
          src={Me}
          alt=""
          className="object-cover object-center max-w-[300px] max-h-[300px] w-full"
        />
      </div>
      <div className="mt-[10px]">
        <h4
          className={`text-[24px] font-semibold flex items-center gap-6 ${
            context?.isDark ? "text-dark-heading-color" : "text-primary"
          }`}
        >
          Ashraf Jamal <span>👋</span>
        </h4>
        <p className="text-[16px] text-[#576076] font-medium leading-[140%]">
          A Passionate{" "}
          <span
            className={`font-semibold ${
              context?.isDark ? "text-dark-heading-color" : "text-[#576076]"
            }`}
          >
            Full-Stack Developer
          </span>{" "}
          🖥️ having 4+ years of Experiences.
        </p>
        <div className="flex items-center flex-wrap gap-2 mt-[15px]">
          <button
            className="bg-transparent w-full border border-[#576076] text-[#576076] h-[50px] leading-[50px] rounded-[8px] px-[10px] min-w-[150px] flex items-center justify-center gap-2"
            onClick={handleCopy}
          >
            <span>
              <MdContentCopy />
            </span>{" "}
            Copy Email
          </button>
          <a href={`https://wa.me/${phone}`} target="_blank" className="w-full">
            <button className="bg-transparent w-full border border-[#576076] text-[#576076] h-[50px] leading-[50px] rounded-[8px] px-[10px] min-w-[150px] flex items-center justify-center gap-2">
              <span>
                <FaWhatsapp />
              </span>
              WhatsApp
            </button>
          </a>
          <a href={RESUME} target="_blank" className="w-full">
          <button className="bg-senior-secondary text-[white] h-[50px] leading-[50px] rounded-[8px] px-[10px] min-w-[120px] flex items-center justify-center gap-2 w-full">
            <span>
              {" "}
              <SlDocs />{" "}
            </span>
            Download Resume
          </button>
          </a>
        </div>
        <div className="flex items-center justify-center gap-1 mt-[10px]">
          <a
            href="https://www.facebook.com/ashraf.jamal.184881"
            target="_blank"
          >
            <span
              className={`w-[40px] h-[40px] leading-[40px] text-center rounded-[8px] flex items-center justify-center ${
                context?.isDark
                  ? "bg-[#0E1018] border-none text-[#64748b]"
                  : "bg-transparent border border-[#dbdfe5]"
              }`}
            >
              <RiFacebookCircleLine />
            </span>
          </a>
          <a href="https://x.com/ashraflucky99" target="_blank">
            <span
              className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${
                context?.isDark
                  ? "bg-[#0E1018] border-none text-[#64748b]"
                  : "bg-transparent border border-[#dbdfe5]"
              }`}
            >
              <RiTwitterXLine />
            </span>
          </a>
          <a href="https://github.com/ashrafjl" target="_blank">
            <span
              className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${
                context?.isDark
                  ? "bg-[#0E1018] border-none text-[#64748b]"
                  : "bg-transparent border border-[#dbdfe5]"
              }`}
            >
              <RiGithubFill />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ashrafjl?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <span
              className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${
                context?.isDark
                  ? "bg-[#0E1018] border-none text-[#64748b]"
                  : "bg-transparent border border-[#dbdfe5]"
              }`}
            >
              <RiLinkedinBoxFill />
            </span>
          </a>
          <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
            <span
              className={`w-[40px] h-[40px] leading-[40px] border border-[#dbdfe5] text-center rounded-[8px] flex items-center justify-center ${
                context?.isDark
                  ? "bg-[#0E1018] border-none text-[#64748b]"
                  : "bg-transparent border border-[#dbdfe5]"
              }`}
            >
              <MdOutlineEmail />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
