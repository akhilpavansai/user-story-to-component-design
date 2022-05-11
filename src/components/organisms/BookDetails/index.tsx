import { Box, Grid, styled, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "../../atoms/Image";

const BookDetailThumbnail = styled(Box)({});

const BookDetails = () => {
  const data = getBookDetails();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogClose, setDialogClose] = useState(false);
  const handleAddToLibrary = () => {};
  const handleBuy = () => {};
  const handleSendToKindle = () => {};
  return (
    <>
      <Grid>
        <Grid item>
          <Typography>Book Name</Typography>
          <Typography>Book tagline</Typography>
          <Typography>Authors</Typography>
          {/* Icon labels */}
          {/* Buttons in a grid */}
          <Tabs />
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
