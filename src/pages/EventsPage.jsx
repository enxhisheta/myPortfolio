import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Events from "../components/Events.jsx";
import "../global.css";

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Header />
      <main>
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
