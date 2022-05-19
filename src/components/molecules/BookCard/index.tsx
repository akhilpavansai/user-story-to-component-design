import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import ImageWithTypography from "../ImageWithTypography";

const BookCard = (props) => {
  const handleClick = (bookId: number) => {
    location.href = `/details/${bookId}`;
  };
  return (
    <>
      <Card>
        <CardMedia component="img" image="book-cover.png" alt="book img" />
        <CardContent>
          <Typography>{props.title}</Typography>
          <Typography>{props.author}</Typography>
          <ImageWithTypography img={props.timeImg} text={props.minRead} />
          <Button variant={"contained"} onclick={handleClick(props.id)}>
            <Image imgSrc={"3dots.png"} />
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default BookCard;
