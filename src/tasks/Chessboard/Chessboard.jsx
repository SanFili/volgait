import React from "react";
import "./Chessboard.scss";
import cn from "classnames";

const Chessboard = () => {
  const chessSquares = [
    0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0,
    1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0,
  ];

  return (
    <>
      <h2>Шахматная доска</h2>
      <div className="chessboard">
        <div className="chessboard__board">
          {chessSquares.map((el, i) => (
            <div className={cn("chessboard__square", el && "chessboard__square_black")} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Chessboard;
