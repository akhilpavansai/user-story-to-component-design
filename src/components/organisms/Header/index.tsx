import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageWithTypography from "../../molecules/ImageWithTypography";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import ExploreMenu from "../ExploreMenu";

const Header = () => {
  const [search, setSearch] = useState(0);
  const [account, setAccount] = useState(0);
  const handleClickSearchIcon = () => {
    // click on search icon
  };
  const handleClickAccount = () => {
    // click on account section
  };
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
