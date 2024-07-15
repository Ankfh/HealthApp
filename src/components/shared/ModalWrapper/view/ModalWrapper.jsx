import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MuiDialog } from "../style/MuiDialog";
import { useCssContext } from "../../../CssContext/context/CssContex";

const ModalWrapper = (props) => {
  const { color } = useCssContext();

  return (
    <>
      <MuiDialog onClose={props.closeModal} open={props.openModal}>
        <div className={color.bg + " flex  pr-3"}>
          <h2 className="w-full  flex items-center justify-center text-center h-10 ">
            Modal title
          </h2>
          <IconButton color="success" size="small" onClick={props.closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex w-full justify-center items-center p-7">
          {props.children}
        </div>
      </MuiDialog>
    </>
  );
};

export default ModalWrapper;
