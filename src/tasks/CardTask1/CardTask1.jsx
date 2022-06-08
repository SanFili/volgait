import React from "react";
import "./CardTask.scss";

const CardTask1 = () => {
  return (
    <>
      <h2>Верстка карточки</h2>
      <div className="card">
        <img className="card__img" src="./images/juice.png" alt="сок" />
        <h3 className="card__title">Dose Juice organic</h3>
        <p className="card__text">
          Raw organic cold pressed juices & smoothies delivered to your door or available at a store near you. Organic
          juices do not contain dyes.
        </p>
      </div>
      <div className="card">
        <img className="card__img" src="./images/juice.png" alt="сок" />
        <p className="card__text">
          Raw organic cold pressed juices & smoothies delivered to your door or available at a store near you. Organic
          juices do not contain dyes.
        </p>
      </div>
    </>
  );
};

export default CardTask1;
