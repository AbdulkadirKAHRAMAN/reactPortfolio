import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    company: "Faculty of Technology",
    role: "Selcuk University Computer Engineering ",
    period: "2018 - 2024",
    location: "Konya/Turkey",
    type: "Full-time",
    logo: "company-a-logo.svg",
    skills: [],
      
  },
  {
    id: 2,
    company: "training at Acun Medya Academy",
    role: "Frontend Developer",
    period: "2024 - Present",
    location: "Istanbul Nisantasi University",
    type: "Full-time",
    logo: "company-b-logo.svg",
    skills: ["React", "Next.js", "Tailwind CSS" , "JavaScript", "Html", "CSS"],
  },
];

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "HTML", proficiency: 90 },
    { name: "CSS", proficiency: 80 },
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 75 },
    { name: "Tailwind CSS", proficiency: 75 },
  ],
  
};

const AboutMe = () => {
  return (
    <section id="about" style={{ padding: "50px", background: "#121212", color: "#fff" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>Trainings so far 🛤️</h3>
        <div>
          {timelineData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "#1e1e1e",
                padding: "20px",
                borderRadius: "10px",
                margin: "20px auto",
                maxWidth: "500px",
              }}
            >
              <h4>{item.role} at {item.company}</h4>
              <p>{item.period} - {item.location}</p>
              <p>{item.type}</p>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {item.skills.map((skill, index) => (
                  <span key={index} style={{ padding: "5px 10px", background: "#333", borderRadius: "5px" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 style={{ textAlign: "center", marginTop: "50px" }}>Code Arsenal ⚔️</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} style={{ background: "#1e1e1e", padding: "20px", borderRadius: "10px" }}>
              <h4>{category}</h4>
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const SkillBar = ({ name, proficiency }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{name}</span>
        <span>{proficiency}%</span>
      </div>
      <div style={{ width: "100%", height: "5px", background: "#444", borderRadius: "5px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1 }}
          style={{ height: "100%", background: "#a855f7" }}
        />
      </div>
    </div>
  );
};

export default AboutMe;