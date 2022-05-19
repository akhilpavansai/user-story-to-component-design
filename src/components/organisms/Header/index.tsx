import { Grid, Typography } from "@mui/material";
import React from "react";
import ImageWithTypography from "../../molecules/ImageWithTypography";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import ExploreMenu from "../ExploreMenu";

const Header = () => {
  return (
    <>
      <Grid>
        {/* display flex direction row */}
        <ImageWithTypography img={"logo"} text={"Blinkist"} />
        <Button variant={""} onclick={undefined}>
          <Image imgSrc={"search-icon"} />
        </Button>
        <ExploreMenu data={undefined} />
        <Typography>My Library</Typography>
        <Typography>Highlights</Typography>
        <ImageWithTypography img={"drop-down-icon"} text={"Account"} />
      </Grid>
    </>
  );
};

export default Header;
