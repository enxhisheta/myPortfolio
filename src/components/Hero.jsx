import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1>Welcome to NG Dev Space!</h1>
      <h2>Your One-Stop Solution for All Your Web Needs</h2>
      <p>I am Enxhi Sheta</p>
      <p>Web Developer & Designer</p>
      <Link to="/projects" className="btn">
        View My Work
      </Link>
    </section>
  );
};

export default Hero;
