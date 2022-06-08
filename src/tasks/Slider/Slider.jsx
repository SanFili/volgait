import React from "react";
import "./Slider.scss";
import cn from "classnames";

const items = [
  {
    image: "./images/podsBlue.png",
    color: "blue",
    id: 1,
  },
  {
    image: "./images/podsPink.png",
    color: "pink",
    id: 3,
  },
  {
    image: "./images/podsWhite.png",
    color: "white",
    id: 2,
  },
];

const Slider = () => {
  return (
    <>
      <h2>Слайдер</h2>
      <div className="slider">
        {items.map((el, i) => (
          <input
            className={cn("slider__button", `slider__button_${el.color}`)}
            type="radio"
            name="pods"
            key={el.id}
            defaultChecked={i === 0}
          />
        ))}
        <div className="slider__images">
          {items.map((el) => (
            <img
              className={cn("slider__image", `slider__image_${el.color}`)}
              src={el.image}
              alt="наушники"
              key={el.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
