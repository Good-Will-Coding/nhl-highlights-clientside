import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

function ImageGrid({ images }) {
  const generateImages = allImages => {
    if (allImages) {
      return allImages.map(item => {
        return (
            <Slide right key={item.id}>
          <div className={`item ${item.type}`}>
              <div className="veil" />
              <div
                className="image"
                style={{
                  background: `url(/Images/action/${item.image}) no-repeat`
                }}
              />
              <div className="title">
                <Link to={item.link}>{item.title}</Link>
              </div>
          </div>
          </Slide>
        );
      });
    }
  };

  return <div className="home_images">{generateImages(images)}</div>;
}

export default ImageGrid;
