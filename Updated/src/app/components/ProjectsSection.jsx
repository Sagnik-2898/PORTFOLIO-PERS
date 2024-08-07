"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next-JS Portfolio Website",
    description: "Created My Portfolio website using Reactjs,Nextjs and Tailwind CSS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sagnik-2898/PORTFOLIO-PERS",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React To do List-Web app",
    description: "Created A to do list using React,tailwind and Vite Config",
    image: "/images/projects/21.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sagnik-2898/React-To-Do",
    previewUrl: "https://react-to-do-vert.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Created The clone of Amazon.com using Html,CSS and JS",
    image: "/images/projects/Amazon-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sagnik-2898/Project-Amazon.com-Clone",
    previewUrl: "https://sagnik-2898.github.io/Project-Amazon.com-Clone/Project%20Amazon%20Clone/index.html",
  },
  {
    id: 4,
    title: "Simon Says Game",
    description: "Created a game using Dom Manipulation which performs the Simon Says Game. The user need to match the sequence to score a high score otherwise if any wrong button is pressed then the game will over.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sagnik-2898/Simon-Says-Game",
    previewUrl: "https://sagnik-2898.github.io/Simon-Says-Game/Simon.html",
  },
  {
    id: 5,
    title: "Staynest - Property Listing",
    description: "Staynest is a website to book hotels to your next destination. Visit our Website and dont forget to give us a 5 stars. P.S-> The app is under build phase visit the github profile for more...",
    image: "/images/projects/Staynest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sagnik-2898/StayNest",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
