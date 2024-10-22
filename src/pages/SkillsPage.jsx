import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import About from "../components/About";

import "../global.css";

const SkillsPage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
