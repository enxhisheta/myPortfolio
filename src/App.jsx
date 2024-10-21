import React from "react";
import { useNavigate } from "react-router-dom";
import "./global.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { ContactForm } from "./components/Contact.jsx";
import { ScrollButton } from "./components/ScrollToTop.jsx";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ContactForm />
        <ScrollButton />
        <button onClick={() => navigate("/another")}>
          Go to Another Component
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
