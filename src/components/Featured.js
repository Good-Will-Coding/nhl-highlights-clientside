import React from "react";
import Slider from "react-slick";

const Featured = ({ slides }) => {
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const generateSlides = slides => {
    if (slides) {
      return (
        <Slider {...sliderSettings}>
          {slides.map(item => (
            <div className="slider-container" key={item.id}>
              <div
                className="item-slider"
                style={{ background: `url(/Images/covers/${item.cover})` }}
              >
                <div className="caption">
                  <h4>{item.topic}</h4>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      );
    }
  };
  return <div>{generateSlides(slides)}</div>;
};

export default Featured;
