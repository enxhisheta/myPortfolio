import { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalData, setModalData] = useState({ isOpen: false, project: null });

  const projects = [
    {
      id: 1,
      category: "e-commerce",
      title: "VehiCool",
      description:
        "A revolutionary online platform designed to streamline the vehicle rental process...",
      image: "../assets/images/vehicool.png",
      images: [
        "../assets/images/vehicool1.jpg",
        "../assets//images/vehicool2.jpg",
        "../assets/images/vehicool3.jpg",
      ],
    },
    {
      id: 2,
      category: "web",
      title: "SouthCoast Albania",
      description: "A website about exploring the south coast of Albania...",
      image: "southCoast.png",
    },
    {
      id: 3,
      category: ["game", "web"],
      title: "Guess My Number",
      description: "A simple number guessing game...",
      image: "guessMyNumber.png",
    },
    {
      id: 4,
      category: ["game", "web"],
      title: "Pig Game",
      description: "Pig Game is a two-player dice game...",
      image: "pigGame.png",
    },
    {
      id: 5,
      category: "web",
      title: "Student Information System",
      description: "A website about exploring the south coast of Albania...",
      image: "student.png",
    },
    {
      id: 6,
      category: "mobile",
      title: "EmptyShelves",
      description:
        "Empty Shelves is a React Native app designed for tracking books...",
      image: "emptyshelves.png",
    },
  ];

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  const openModal = (project) => {
    setModalData({ isOpen: true, project });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, project: null });
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
          onClick={() => handleFilter("web")}
        >
          Web Development
        </button>
        <button
          className={`filter-btn ${
            activeFilter === "e-commerce" ? "active" : ""
          }`}
          onClick={() => handleFilter("e-commerce")}
        >
          E-commerce
        </button>
        <button
          className={`filter-btn ${activeFilter === "game" ? "active" : ""}`}
          onClick={() => handleFilter("game")}
        >
          Games
        </button>
        <button
          className={`filter-btn ${activeFilter === "mobile" ? "active" : ""}`}
          onClick={() => handleFilter("mobile")}
        >
          Mobile Development
        </button>
      </div>

      <div className="grid-container">
        {projects
          .filter(
            (project) =>
              activeFilter === "all" || project.category === activeFilter
          )
          .map((project) => (
            <div
              key={project.id}
              className="project"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>

      {modalData.isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{modalData.project.title}</h3>
            <p>{modalData.project.description}</p>
            <div className="modal-images">
              {modalData.project.images &&
                modalData.project.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${modalData.project.title} ${idx + 1}`}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Projects };
