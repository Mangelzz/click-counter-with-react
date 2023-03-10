import React from "react";

const Button = ({ text, isClickButton, controlClick }) => {
  return (
    <button
      onClick={controlClick}
      className={
        isClickButton
          ? "m-1 bg-[#002ead] text-4xl font-bold text-white"
          : "m-1 bg-[#5a01a7] text-4xl font-bold text-white"
      }
    >
      {text}
    </button>
  );
};

export default Button;
