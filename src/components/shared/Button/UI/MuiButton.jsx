import React from "react";
import { ButtonMui } from "../style/muiButton";
const MuiButton = ({ type, title, size, bgColor, onClick = () => {} }) => {
  return (
    <ButtonMui
      onClick={onClick}
      className="bg-orange-60"
      type={type}
      size={size}
      bgColor={bgColor}
      fullWidth
    >
      {title}
    </ButtonMui>
  );
};

export default MuiButton;
