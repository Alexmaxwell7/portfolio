import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Fourbends Pvt. Ltd. (2022 - Present)"
            result="Madurai"
            skills='Next js,React, Tailwind Css,Zustand StateManagement, Context,MUI,Bootstrap'
            des="We worked on a variety of web apps, including ERP and insurance-related
ones, before moving on to educational-qubits project ones. I was in
charge of all application design engineering and data integration. After
that, I spent the last ten months working on the most recent NextJS
framework (education-related project Qubits)."
          />
          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Rapadchakra Ventures LLP (2021 - 2022)"
            skills='React,Redux Statemanagement,Ant Design'
            result="Chennai"
            des="We worked on the ERP-based application using React and Express. My
responsibility was data integration and design for the entire component
(first phase), then implementing some new backend services."
          />
          <ResumeCard
            title="Freelancer (Front-end Developer)"
            subTitle="(2020 - 2021)"
            result="Remote"
            des="We worked on the various web applications and mobile applications. My role and responsibilities were limited to data integration and the design aspect only."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2020</p>
          <h2 className="text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MEAN Stack Developer"
            subTitle="Flextronics (2019 - 2020)"
            result="Chennai"
            des="We worked on the stack application and its uses to provide alternate
parts for all mechainaries, etc. My responsibility was data integration and
design of a few components."
          />
          <ResumeCard
            title="Ionic Developer"
            subTitle="(2019(April) - 2019(June))"
            result="Trichy"
            des="learned about cross-platform compatibility, hybrid app development, and progressive web apps (PWA)."
          />
          {/* <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
