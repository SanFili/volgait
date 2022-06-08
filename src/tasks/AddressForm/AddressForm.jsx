import React, { useEffect, useRef, useState } from "react";
import "./AddressForm.scss";
import cn from "classnames";

const cities = ["Москва", "Париж", "Лондон", "Сыктывкар"];

const AddressForm = () => {
  const [selected, setSelected] = useState(undefined);
  const [opened, setOpened] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const selectRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    const closeList = (event) => {
      const el = event.target;
      if (!selectRef.current?.contains(el) && !optionsRef.current?.contains(el)) {
        setOpened(false);
      }
    };

    document.addEventListener("click", closeList);
    return () => document.removeEventListener("click", closeList);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (submitted) {
      setSubmitted(false);
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <>
      <h2>Анимация формы</h2>
      <form className="form">
        <div className={cn("form__container", submitted && "form__container_error")}>
          <div className="form__fields">
            <div
              className={cn("form__select", opened && "form__select_opened")}
              ref={selectRef}
              onClick={() => setOpened((prev) => !prev)}
            >
              {selected ? <p className="form__selected">{selected}</p> : <p className="form__placeholder">Your city</p>}
              <img
                className={cn("form__open", opened && "form__open_opened")}
                src="./images/arrow.svg"
                alt="open/close"
              />
            </div>
            <input className="form__input" type="text" placeholder="Your street" />
            <button className="form__button" onClick={(e) => submit(e)}>
              Submit for review
            </button>
          </div>
          <div className="form__error">
            <img className="form__error-icon" src="./images/error.svg" alt="" />
            <div className="form__error-description">
              <p className="form__error-text">Oops! Sorry your address is not active…</p>
              <p className="form__error-text">
                Try to enter another address and try again, most likely the new address will be in the availability area
              </p>
            </div>
          </div>
        </div>
        <div className={cn("form__options", opened && "form__options_opened")} ref={optionsRef}>
          {cities.map((city) => (
            <label className="form__option">
              <input
                className="form__radio"
                type="radio"
                name="options"
                value={city}
                onClick={(e) => setSelected(e.target.value)}
              />
              {city}
            </label>
          ))}
        </div>
      </form>
    </>
  );
};

export default AddressForm;
