import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageWithTypography from "../../molecules/ImageWithTypography";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import ExploreMenu from "../ExploreMenu";
import SearchBar from "../SearchBar";
import { BOOKSLIST } from "../../../utils/constants";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState(BOOKSLIST);
  const handleType = (event) => {
    setSearchValue(event.target.value);
  };
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const handleClickSearchIcon = () => {
    setSearchbarOpen(true);
  };
  const handleClickAccount = () => {
    // click on account section
  };
  useEffect(() => {
    //based on searchvalue filter drop down list
  }, [searchValue]);
  return (
    <>
      <Grid>
        {/* display flex direction row */}
        <ImageWithTypography img={"logo"} text={"Blinkist"} />
        <Button variant={""} onclick={handleClickSearchIcon}>
          <Image imgSrc={"search-icon"} />
        </Button>
        {searchbarOpen ? (
          <>
            <SearchBar variant="primary" onchange={handleType} />
            <Grid>
              {filteredList.map((row, index) => {
                return <Grid key={index}>{...row}</Grid>;
              })}
            </Grid>
          </>
        ) : (
          <></>
        )}
        <ExploreMenu data={undefined} />
        <Typography>My Library</Typography>
        <Typography>Highlights</Typography>
        <Button variant={""} onclick={handleClickAccount}>
          <ImageWithTypography img={"drop-down-icon"} text={"Account"} />
        </Button>
      </Grid>
    </>
  );
};

export default Header;
