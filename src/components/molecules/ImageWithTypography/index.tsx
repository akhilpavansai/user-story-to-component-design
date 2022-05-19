import { Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";

const ImageWithTypography = ({ img, text }) => {
  return (
    <div>
      <Image imgSrc={img} />
      <Typography>{text}</Typography>
    </div>
  );
};

export default ImageWithTypography;
