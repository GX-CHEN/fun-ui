import React from "react";
import "./CarouselScroll.css";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function CarouselScroll() {
  const handleClick = e => {
    console.log(e.target);
    console.log(ref3.offsetLeft);
    ref3.scrollLeft = 1000;
  };

  let contentRef;
  let ref1;
  let ref2;
  let ref3;
  return (
    <div className="carousel-container">
      <div
        key={1}
        onClick={handleClick}
        ref={ref => (ref1 = ref)}
        className="carousel-item"
      >
        1
      </div>
      <div
        key={2}
        onClick={handleClick}
        ref={ref => (ref2 = ref)}
        className="carousel-item"
      >
        2
      </div>
      <div
        key={3}
        onClick={handleClick}
        ref={ref => (ref3 = ref)}
        className="carousel-item"
      >
        3
      </div>
    </div>
  );
}

export default CarouselScroll;
