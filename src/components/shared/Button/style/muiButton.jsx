import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { blueGrey, indigo } from "@mui/material/colors";

export const ButtonMui = styled(Button)(({ theme, bgColor }) => ({
  textTransform: "none",
  backgroundColor: bgColor ?? "#f95700",
  color: "white",
  fontWeight: "bold",
  padding: "8px 26px", // Adjust padding values as needed
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: bgColor ?? "#f95700",
    color: "black",
  },
}));
