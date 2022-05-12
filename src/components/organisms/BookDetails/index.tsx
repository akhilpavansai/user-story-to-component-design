import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import ImageWithTypography from "../../molecules/ImageWithTypography";
import Tabs from "../../molecules/Tabs";
import Modal from "../../molecules/Modal";

const BookDetailThumbnail = styled(Box)({});

const BookDetails = () => {
  const data = getBookDetails();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleAddToLibrary = () => {};
  const handleSendToKindle = () => {
    setDialogOpen(true);
  };
  const handleBuy = () => {};

  return (
    <>
      <Grid>
        <Grid item>
          <Typography>Book Name</Typography>
          <Typography>Book tagline</Typography>
          <Typography>Authors</Typography>
          <ImageWithTypography img={"timeImg.png"} text={"min-read"} />
          <ImageWithTypography img={"audio.png"} text={"audio available"} />
          <Grid>
            <Button variant={"text"} onclick={handleAddToLibrary}>
              Read now
            </Button>
            <Button variant={"text"} onclick={handleBuy}>
              Buy Book
            </Button>
            <Button variant={"text"} onclick={handleSendToKindle}>
              Send to kindle
            </Button>
          </Grid>
          <Modal
            variant={"primary"}
            isPrimaryOpen={dialogOpen}
            isSecondaryOpen={false}
          />
          <Tabs data={["synopsis", "who is it for", "About the author"]} />
        </Grid>
        <Grid item>
          <BookDetailThumbnail>
            <Image imgSrc={""} />
          </BookDetailThumbnail>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDetails;
