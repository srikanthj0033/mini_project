import React, { useState } from "react";
import "./Carrousel.css";
import { IconArrowRight,IconArrowLeft } from "@tabler/icons-react";

function Carrousel({ data }) {
  const [slides, setSlides] = useState(0);

  const nextSlide = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1)
  }

  const previousSlide = () => {
    setSlides(slides === 0 ? data.length - 1 : slides - 1)
  }
  return (
    <div className="carrousel">
      <IconArrowLeft className="arrow arrow-left" onClick={previousSlide} />
      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={slides === index ? "slides" : "slides slides-hidden"}
          />
        );
      })}
      <IconArrowRight className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlides(index)}
              className={
                slides === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carrousel;
