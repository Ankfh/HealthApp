import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { blueGrey, indigo } from "@mui/material/colors";

export const ButtonMui = styled(Button)(({ theme, bgColor }) => ({
  textTransform: "none",
  backgroundColor: bgColor?? '#26653F',
  color: "white",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: bgColor?? '#1D5433',
    color: "white",
  },
}));
