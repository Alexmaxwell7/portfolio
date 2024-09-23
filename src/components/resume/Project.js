import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">PROJECTS</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Qubits(E-Education Platform)"
            subTitle="Fourbends Pvt. Ltd. (2023-2024)"
            result="Madurai"
            skills="Next js, Tailwind Css, Shadcn UI, Zustand Statemanagement,Typescript"
            des="To deliver sophisticated programming skills and technologies to school students.we worked on the Qubits 3.0 project, utilizing ReactJS, Tailwind CSS, Next.js, TypeScript, and the Jest
testing library. In Qubits, administrators can create and manage schools, teachers, and students. Teachers
have the capability to customize courses, chapters, and topics, as well as assign quizes and assignments.
"
          />
          <ResumeCard
            title="FWD (Insurance Web Application)"
            subTitle="Fourbends Pvt. Ltd. (2022-2023)"
            result="Madurai"
            skills="React,Bootstrap,Context API"
            des="added new enhancements—family coverage, discount section, etc.—and converted all component classes to
functional in React."
          />
           <ResumeCard
            title="Xpheno"
            subTitle="Fourbends Pvt. Ltd. (2022-2023)"
            result="Madurai"
            skills="React,MUI Library,Redux,Typescript"
            des="This project is a recruitment system where employers can hire employees. We used the MUI library,
TypeScript, and React to build this system."
          />
            <ResumeCard
            title="Everwin (ERP Platform)"
            subTitle="Rapadchakra Ventures LLP (2021-2022)"
            result="Chennai"
            skills="React,Ant design,Redux Statemanagement"
            des="The Everwin Platform is a centralized, cloud-based
system that integrates all the core functions of a
educational institution.
"
          />
           <ResumeCard
            title="GAC (Global Alternate Communicator)"
            subTitle="Flextronics (Internship-2019-2020)"
            result="Chennai"
            skills="Angular,Bootstrap"
            des="We worked on the stack application and its uses to provide alternate
parts for all mechainaries, etc.
"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
