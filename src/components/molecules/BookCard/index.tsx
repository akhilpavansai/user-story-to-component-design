import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import ImageWithTypography from "../ImageWithTypography";

const BookCard = (props) => {
  return (
    <>
      <Card>
        <CardMedia component="img" image="book-cover.png" alt="book img" />
        <CardContent>
          <Typography>{props.title}</Typography>
          <Typography>{props.author}</Typography>
          <ImageWithTypography img={props.timeImg} text={props.minRead} />
          <Button variant={""} onclick={undefined}>
            <Image imgSrc={"3dots.png"} />
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default BookCard;
