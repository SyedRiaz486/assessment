import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClick, type, className, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${classes.btn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
