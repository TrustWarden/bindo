import { useState, useEffect } from "react";
// import "./WordSlider.css";

function WordSlider() {
  const words = ["Decentralized", "Liquid", "Simple"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsSliding(false);
      }, 500); // Match this to the animation duration in CSS
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="word-slider h-10 max-h-32 lg:h-24 lg:max-h-52">
      <div className={`word ${isSliding ? "slide-down" : ""}`}>
        {words[currentWordIndex]}
      </div>
    </div>
  );
}

export default WordSlider;
