import React from "react";
import Button from "../../atoms/Button";
import Tabs from "../../molecules/Tabs";

const ExploreMenu = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prevValue) => !prevValue);
  };
  return (
    <>
      <Button variant={""} onclick={handleClick}>
        Explore
      </Button>
      {/* displays list of options available */}
      <Tabs data={data} />
    </>
  );
};

export default ExploreMenu;
