import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import "../global.css";

const HomePage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
