import { Box, Grid, styled, Tabs, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";

const BookDetailThumbnail = styled(Box)({});

const BookDetails = () => {
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
