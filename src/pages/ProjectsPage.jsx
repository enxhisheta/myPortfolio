import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import "../global.css";

const ProjectsPage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
