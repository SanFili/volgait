import React, { useEffect, useState } from "react";
import "./Loader.scss";

const Loader = ({ startRate = 0 }) => {
  const [rate, setRate] = useState(startRate);

  useEffect(() => {
    setInterval(() => {
      setRate((prev) => (prev === 100 ? 100 : (prev += 1)));
    }, 100);
  }, []);

  useEffect(() => {
    if (rate === 100) clearInterval();
  }, [rate]);

  return (
    <>
      <h2>Заполнение по кругу</h2>
      <div className="loader">
        <svg className="loader__circle" width="575" height="575" viewbox="0 0 575 575" fill="none">
          <path
            d="M287.5 530C421.429 530 530 421.429 530 287.5C530 153.571 421.429 45 287.5 45C153.571 45 45 153.571 45 287.5C45 421.429 153.571 530 287.5 530Z"
            fill="white"
            stroke="#EBEBEB"
            stroke-width="90"
            stroke-linecap="round"
            stroke-dasharray="1523.87,0"
          />
          <path
            d="M287.5 530C421.429 530 530 421.429 530 287.5C530 153.571 421.429 45 287.5 45C153.571 45 45 153.571 45 287.5C45 421.429 153.571 530 287.5 530Z"
            stroke="#4082F2"
            stroke-width="90"
            stroke-linecap="round"
            stroke-dasharray="1523.87,0"
          >
            <animate
              attributeName="stroke-dasharray"
              from={`${15.2387 * rate},1523.87`}
              to="1523.87,0"
              calcMode="linear"
              dur="10s"
            />
          </path>
        </svg>
        <span className="loader__rate">{rate}%</span>
      </div>
    </>
  );
};

export default Loader;
