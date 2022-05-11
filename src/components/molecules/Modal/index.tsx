import { Grid, styled } from "@mui/material";
import React from "react";

const PrimaryModal = styled(Grid)({});
const SecondaryModal = styled(Grid)({});

const Modal = ({ variant }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (variant == "primary") {
    return (
      <PrimaryModal>
        {/* contains text with text field and buttons to add kindle account */}
      </PrimaryModal>
    );
  } else if (variant == "secondary") {
    {
      <SecondaryModal>
        {/* contains text and button for continue reading  */}
      </SecondaryModal>;
    }
  } else {
    return <div>Select correct variant</div>;
  }
};

export default Modal;
