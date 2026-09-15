import { useState } from "react";
import IconButton from "../IconButton/IconButton";
import RightIcon from "../../Components/svg-Icons/RightIcon";
import LeftIcon from "../../Components/svg-Icons/LeftIcon";
import "./SimpleSlider.scss";
function SimpleSlider({ slides, imgAlt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (slides.length === 1) {
    return <img src={slides[currentIndex]} alt={imgAlt} />;
  }
  return (
    <div className="s-slider">
      <div className="s-slider-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`s-slider-slide ${index === currentIndex ? `active` : ``}`}
          >
            <img src={slide} alt={imgAlt} />
          </div>
        ))}
      </div>
      <div className="s-slider-controls">
        <IconButton
          icon={LeftIcon}
          buttonSize="sm"
          buttonType="round"
          onClick={goToPrev}
        />
        <IconButton
          icon={RightIcon}
          buttonSize="sm"
          buttonType="round"
          onClick={goToNext}
        />
      </div>
    </div>
  );
}
export default SimpleSlider;
