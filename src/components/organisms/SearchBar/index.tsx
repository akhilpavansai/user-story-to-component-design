import { InputAdornment, styled, TextField } from "@mui/material";
import Image from "../../atoms/Image";
import React from "react";

const PrimarySearchBar = styled(TextField)({});
const SecondarySearchBar = styled(TextField)({});

const SearchBar = ({ variant, onchange }) => {
  if (variant === "primary") {
    return (
      <PrimarySearchBar
        onChange={onchange}
        placeholder="search fot titles and authors"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image imgSrc={"search.png"} />
            </InputAdornment>
          ),
        }}
      />
    );
  } else if (variant === "secondary") {
    return (
      <SecondarySearchBar
        placeholder="search for title or author"
        onChange={onchange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image imgSrc={"search.png"} />
            </InputAdornment>
          ),
        }}
      />
    );
  }
  return <div>SearchBar</div>;
};

export default SearchBar;
