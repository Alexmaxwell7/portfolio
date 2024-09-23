import React from 'react'
import Title from '../layouts/Title'
import { blogImg,weatherImg,empImg,mCQImg,trafficImg,shopingImg } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Traffice Management"
          des="The RTO Management Web Application is a comprehensive digital platform designed to streamline and automate the various services provided by the Regional Transport Office."
          githubUrl= 'https://github.com/Alexmaxwell7/traffic-management'
          src={trafficImg}
        />
        <ProjectsCard
          title="Employee Management"
          des="The Employee Management Web Application is an efficient digital solution designed to manage the complete lifecycle of employees within an organization."
          githubUrl= 'https://github.com/Alexmaxwell7/Management-client-Frontend'

          src={empImg}
        />
        <ProjectsCard
          title="Shoping Cart"
          des="The Shopping Cart Web Application is a modern e-commerce solution designed to provide a seamless and intuitive shopping experience for users."
          githubUrl= 'https://github.com/Alexmaxwell7/shopping-redux-context-'

          src={shopingImg}
        />
        <ProjectsCard
          title="Weather APP"
          des="The Weather Forecast Web Application is a sleek and user-friendly platform that provides real-time weather updates and forecasts for cities worldwide."
          githubUrl= 'https://github.com/Alexmaxwell7/weather-app'

          src={weatherImg}
        />
        <ProjectsCard
          title="MCQ BOOK Application"
          des="The MCQ Web Application is an intuitive and interactive platform designed for educational institutions, instructors, and students to create, manage, and take quizzes and exams."
          githubUrl= 'https://github.com/Alexmaxwell7/mern_crud_bookApp_frontend'

          src={mCQImg}
        />
        <ProjectsCard
          title="Blog Application"
          des="The Blog Application is a user-friendly platform designed for individuals and organizations to create, manage, and share blog posts seamlessly."
          githubUrl= 'https://github.com/Alexmaxwell7/react-redux-blog-Frontend'

          src={blogImg}
        />
      </div>
    </section>
  );
}

export default Projects