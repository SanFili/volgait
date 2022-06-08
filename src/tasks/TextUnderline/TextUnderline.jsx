import React from "react";
import "./TextUnderline.scss";

const TextUnderline = () => {
  return (
    <>
      <h2>Подчеркивание текста</h2>
      <p className="text">
        <a href="#0">
          <span>Developing this theme, a complex of</span> aggressiveness forms an object of art,{" "}
          <span>but in it self the state of the game is</span> always ambivalent. Empirical history of{" "}
          <span>the arts finishes structuralism.</span>
        </a>
      </p>
      <h2>Подчеркивание текста поверх имеющегося</h2>
      <p className="text text_underlined">
        <a href="#0">
          <span>Developing this theme, a complex of</span> aggressiveness forms an object of art,{" "}
          <span>but in it self the state of the game is</span> always ambivalent. Empirical history of{" "}
          <span>the arts finishes structuralism.</span>
        </a>
      </p>
    </>
  );
};

export default TextUnderline;
