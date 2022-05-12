import { Button, styled, Typography } from "@mui/material";
import MuiModal from "@mui/material/Modal";
import TextField from "../../atoms/TextField";
import Image from "../../atoms/Image";
import React from "react";

const PrimaryModal = styled(MuiModal)({});
const SecondaryModal = styled(MuiModal)({});

const Modal = ({ variant, isPrimaryOpen, isSecondaryOpen }) => {
  const [primaryOpen, setPrimaryOpen] = React.useState(isPrimaryOpen);
  const handlePrimaryClose = () => setOpen(false);
  const [secondaryOpen, setSecondaryOpen] = React.useState(isSecondaryOpen);
  const handleSecondaryClose = () => setOpen(false);
  if (variant == "primary") {
    return (
      <PrimaryModal open={handlePrimaryClose}>
        <>
          <button onClick={handleClose}>close</button>
          <Typography>heading</Typography>
          <Typography>description</Typography>
          <Typography>point1</Typography>
          <Typography>precautions</Typography>
          <Typography>sub heading</Typography>
          <TextField placeholder={"email"} onChange={undefined} />
          <Button variant="contained" onClick={undefined}>
            Add email
          </Button>
          <Button variant="text" onClick={undefined}>
            Need help?
          </Button>
        </>
      </PrimaryModal>
    );
  } else if (variant == "secondary") {
    {
      <SecondaryModal open={false}>
        <>
          <button onClick={handleSecondaryClose}>close</button>
          <Image imgSrc={"tick.png"} />
          <Typography>heading</Typography>
          <Typography>description</Typography>
          <Button onClick={undefined}>Continue reading</Button>
        </>
      </SecondaryModal>;
    }
  } else {
    return <div>Select correct variant</div>;
  }
};

export default Modal;
