import { Button, Card } from "@mui/material";
import { styled } from "@mui/system";
import { blueGrey, indigo } from "@mui/material/colors";

export const CardMui = styled(Card)(({ theme }) => ({
  textTransform: "none",
  maxWidth: "15rem",
  backgroundColor: indigo[900],
  color: "white",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: indigo[800],
    color: "white",
  },
}));
