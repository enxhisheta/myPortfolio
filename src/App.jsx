import "./global.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { ContactForm } from "./components/Contact.jsx";
import { ScrollButton } from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ContactForm />
        <ScrollButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
