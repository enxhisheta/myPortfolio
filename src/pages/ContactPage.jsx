import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

import "../global.css";

const ConstactsPage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ConstactsPage;
