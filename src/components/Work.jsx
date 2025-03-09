import React from "react";
import ProjectCard from "./ProjectCard";
import quizImage from "../assets/quiz.png"; 

const works = [
  {
    imgSrc: quizImage,
    title: "to-do Projesi",
    tags: ["react", "tailwind"],
    projectLink: "#"
  },
  {
    imgSrc: "",
    title: "to-do Projesi",
    tags: ["react", "tailwind"],
    projectLink: "#"
  },
  {
    imgSrc: "",
    title: "to-do Projesi",
    tags: ["react", "tailwind"],
    projectLink: "#"
  },
  {
    imgSrc: "",
    title: "to-do Projesi",
    tags: ["react", "tailwind"],
    projectLink: "#"
  },
  {
    imgSrc: "",
    title: "to-do Projesi",
    tags: ["react", "tailwind"],
    projectLink: "#"
  },
  {
    imgSrc: "",
    title: "to-do Projesi",
    tags: ["react", "tailwind"],
    projectLink: "#"
  },
];

const Work = () => {
  return (
    <section id="work" className="section bg-[#121212] text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="headline-2 mb-6 text-center text-lg">Projelerim</h2>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard
              key={index}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
