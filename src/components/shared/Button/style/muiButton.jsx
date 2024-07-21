import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { blueGrey, indigo } from "@mui/material/colors";

export const ButtonMui = styled(Button)(({ theme, bgColor }) => ({
  textTransform: "none",
  backgroundColor: bgColor ?? "#f95700",
  color: "white",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: bgColor ?? "#ed8936",
    color: "black",
  },
}));
