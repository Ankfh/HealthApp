import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MuiDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    // maxWidth: "100%",
    width: "auto",
  },
}));
