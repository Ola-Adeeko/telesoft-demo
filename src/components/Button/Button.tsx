import React from "react";
import "./ButtonStyles.css";

type Color = "white" | "black";

interface Props {
  type: Color;
  children: React.ReactNode;
}

const Button = ({ type, children }: Props) => {
  return (
    <div
      className={`button_container ${
        type === "white" ? "button_white" : "button_black"
      } `}
    >
      <span className="button_icon"></span>
      <span className="button_text">{children}</span>
    </div>
  );
};

export default Button;
