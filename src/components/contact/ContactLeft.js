import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">AlexMaxwell A</h3>
        <p className="text-lg font-normal text-gray-400">Stack Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Front-end Developer with 3+ years of experience in creating dynamic,
          visually appealing, and user-friendly web applications using React,
          Next.js, and the MERN stack
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7010333919</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">Alexmaxwell3096@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href='https://www.facebook.com/Alexmaxwell2797'>
              <FaFacebookF />
              </a>
          </span>
          <span className="bannerIcon">
          <a href='https://x.com/Alexmaxi7'>
              <FaTwitter />
              </a>
          </span>
          <span className="bannerIcon">
          <a href='https://www.linkedin.com/in/alex-a-043606122/'>
              <FaLinkedinIn />
              </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
