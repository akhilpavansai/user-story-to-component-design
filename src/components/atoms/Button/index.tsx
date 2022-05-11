import React from "react";
import MuiButton from "@mui/material/Button";

const Button = ({ variant, children, onclick }) => {
  return (
    <MuiButton variant={variant} onClick={onclick}>
      {children}
    </MuiButton>
  );
};

export default Button;
