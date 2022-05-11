import React from "react";
import Button from "../../atoms/Button";
import Tabs from "../../molecules/Tabs";

const ExploreMenu = ({ data }) => {
  return (
    <>
      <Button variant={""} onclick={undefined}>
        Explore
      </Button>
      {/* displays list of options available */}
      <Tabs data={data} />
    </>
  );
};

export default ExploreMenu;
