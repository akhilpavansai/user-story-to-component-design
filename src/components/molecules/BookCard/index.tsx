import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import ImageWithTypography from "../ImageWithTypography";

const BookCard = (props) => {
  return (
    <>
      <Box>
        <Image imgSrc={props.bookImg} />
        <Typography>{props.title}</Typography>
        <Typography>{props.author}</Typography>
        <ImageWithTypography img={props.timeImg} text={props.minRead} />
        <Button variant={""}>
          <Image imgSrc={undefined} />
        </Button>
      </Box>
    </>
  );
};

export default BookCard;
