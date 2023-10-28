import React from "react";
import animemerch from "@/public/animemerch.png";
import blogapp from "@/public/blogapp.png";
import travelapp from "@/public/travel_app.png";
import employeemgmt from "@/public/employee_mgmt.png";
import { BiLogoJava } from "react-icons/bi";
import { SiPowerbi } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const certificationsData = [
  {
    title: "Java Programming Beginner to Master",
    description: "Completed a Java certification from Udemy, equipping me with robust Java programming skills, expertise in Java frameworks, and a problem-solving mindset for innovative software development..",
    icon: React.createElement(BiLogoJava),
    date: "2022",
    link: "https://drive.google.com/file/d/1igT6-BwPswMjbByTP9X5FR4o1vsacjSw/view?pli=1",
  },
  {
    title: "POWERBI",
    description:
      "Earned a Power BI certification from CodeBasic, showcasing my expertise in data visualization, report creation, and data-driven insights, enhancing my ability to make informed business decisions.",
    icon: React.createElement(SiPowerbi),
    date: "2023",
    link: "https://drive.google.com/file/d/18SxMzy15qV4rQ_XRXofpeGjeXAP2rC2k/view",
  },
  {
    title: "SQL",
    description:
      "Completed a SQL certification from CodeBasic, demonstrating proficiency in database management, SQL queries, and data manipulation techniques for informed decision-making and efficient data-driven solutions.",
    icon: React.createElement(AiOutlineConsoleSql),
    date: "2023",
    link: "https://drive.google.com/file/d/18RsXzgUsnvxzs_MLV-NwEEPO59qbLp-L/view",
  },
] as const;

export const projectsData = [
  {
    title: "Blog",
    description:
      "Developed a  blog application using a modern tech stack that includes Next.js, React,and MongoDB as the database, with Prisma serving as the ORM layer.",
    tags: ["React", "Next.js", "Prisma", "MongoDB", "Context API"],
    imageUrl: blogapp,
    link: "https://github.com/Abhishekjain5820/Blog-app",
  },
  {
    title: "AnimeMerch",
    description:
      "I worked as a full-stack developer on this  project created backend API's for fast data fetching and implemented features of Ecommerce ",
    tags: ["React", "MongoDB", "Express", "NodeJs"],
    imageUrl: animemerch,
    link: "https://github.com/Abhishekjain5820/ecommerce",
  },
  {
    title: "Travel App",
    description:
      "Designed an Travel aplication using Next.js and React,enhanced by Tailwind CSS design. Plan trips, discover destinations, and craft unforgettable travel experiences..",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    imageUrl: travelapp,
    link: "https://github.com/Abhishekjain5820/Travel-app",
  },
  {
    title: "Employee Management",
    description:
      "Designed an Employee management system using Reactjs and developed the REST API using Spring boot  ",
    tags: ["Spring Boot", "Reactjs", "React-Bootstrap"],
    imageUrl: employeemgmt,
    link: "https://github.com/Abhishekjain5820/React-Spring-Boot-Project",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
  "JavaScript",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Git",
  "Spring Boot",
  "PowerBI",
] as const;
