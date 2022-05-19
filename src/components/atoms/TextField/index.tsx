import React from "react";
import MuiTextField from "@mui/material/TextField";

const TextField = ({ placeholder, onChange }) => {
  return <MuiTextField placeholder={placeholder} onChange={onChange} />;
};

export default TextField;
