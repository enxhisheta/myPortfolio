import React from "react";
import { useNavigate } from "react-router-dom";
import "./global.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import Events from "./components/Events.jsx";

const AnotherComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Header />
      <main>
        <h1>Another Component</h1>
        <Events />
        <button onClick={() => navigate("/")}>Go back to App</button>
      </main>
      <Footer />
    </div>
  );
};

export default AnotherComponent;
