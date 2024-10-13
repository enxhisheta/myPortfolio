import { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: visible ? "inline" : "none",
        position: "fixed",
        bottom: "40px",
        right: "40px",
        backgroundColor: "var(--primary-color)",
        color: "white",
        border: "none",
        padding: "20px",
        cursor: "pointer",
        transition: "opacity 0.3s ease",
        fontSize: "20px",
      }}
    >
      ↑
    </button>
  );
};

export { ScrollButton };
