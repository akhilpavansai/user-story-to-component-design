import { styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { TESTSLIST } from "../../../utils/constants";

const PrimarySearchBar = styled(TextField)({});
const SecondarySearchBar = styled(TextField)({});

const SearchBar = ({ variant }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState("");

  const handler = (event: any) => {
    setValue(event.target.value);
  };
  const filterHandler = (test: { name: string }) => {
    if (test.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }
  };
  const handlerFilter = () => {
    let resultList: any;
    if (value.length != 0) {
      resultList = TESTSLIST.filter(filterHandler);
      setFilteredData(resultList);
    }
  };

  const clearHandler = () => {
    setValue("");
  };

  if (variant === "primary") {
    return <PrimarySearchBar />;
  } else if (variant === "secondary") {
    return <SecondarySearchBar />;
  }
  return <div>SearchBar</div>;
};

export default SearchBar;
