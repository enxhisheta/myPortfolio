import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", proficiency: "90%" },
    { name: "CSS", proficiency: "80%" },
    { name: "JavaScript", proficiency: "70%" },
    { name: "React", proficiency: "60%" },
    { name: "React Native", proficiency: "50%" },
    { name: ".NET", proficiency: "50%" },
    { name: "SQL", proficiency: "40%" },
    { name: "Python", proficiency: "40%" },
    { name: "Git", proficiency: "40%" },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <span style={{ width: skill.proficiency }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Skills };
