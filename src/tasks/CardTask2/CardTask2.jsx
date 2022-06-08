import React from "react";
import "./CardTask.scss";

const CardTask2 = () => {
  return (
    <>
      <h2>Верстка карточки</h2>
      <div className="headphones">
        <h4 className="headphones__title">Noise canceling headphones</h4>
        <img className="headphones__img" src="./images/podsCard.png" alt="наушники" />
        <p className="headphones__text">
          Active noise reduction headphones works on the principle of inverting noise, which allows you to drown the
          environment up to 99%. There is a microphone reading of noise and a mirror reflection of the noise wave
          (inverting) in the speakers in order to smooth it out.
        </p>
      </div>
    </>
  );
};

export default CardTask2;
