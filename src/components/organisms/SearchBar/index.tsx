import { styled, TextField } from "@mui/material";
import React from "react";

const PrimarySearchBar = styled(TextField)({});
const SecondarySearchBar = styled(TextField)({});

const SearchBar = ({ variant }) => {
  if (variant === "primary") {
    return <PrimarySearchBar />;
  } else if (variant === "secondary") {
    return <SecondarySearchBar />;
  }
  return <div>SearchBar</div>;
};

export default SearchBar;
