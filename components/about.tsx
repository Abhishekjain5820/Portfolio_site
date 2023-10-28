"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
         Hello, I'm Abhishek Jain, a
        dedicated Computer Science Engineering student on track to graduate in
        2024. I have a fervent passion for <span className="font-medium">full-stack development</span> and an array
        of skills in my toolkit. In the realm of web development, I've honed my
        expertise in the <span className="font-bold ">React, Node.js, and MongoDB</span>and am currently delving deeper into{" "}
        <span className="italic underline font-medium">Next.js</span>. My proficiency extends to server-side development, where I've
        explored the intricacies of <span className="font-medium">Spring Boot</span>. But that's not all - my journey
        also takes me into the world of data analytics, where I use <span className="font-medium">SQL and
        Power BI</span> to unearth valuable insights. With a dynamic blend of skills
        and a constant hunger for learning, I'm eager to share my evolving
        portfolio, which showcases my projects and experiences. Welcome to my
        digital world!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and visiting gym to keep myself fit. I
        also enjoy <span className="font-medium">learning new things</span>. I
        love to play cricket in free time{" "}
      </p>
    </motion.section>
  );
}
