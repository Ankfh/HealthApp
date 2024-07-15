import { Button, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { lightBlue, blueGrey } from "@mui/material/colors";

export const MuiTextField = styled(TextField)(({ theme }) => ({
  ".MuiInputBase-root": {
    color: blueGrey[400],
    font: 200,
  },

  "& label": {
    color: blueGrey[400],
  },
  "& label.Mui-focused": {
    color: theme.palette.white,
  },

  "& .MuiInput-underline:after": {
    // borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      //   borderColor: "blue",
    },
    "&:hover fieldset": {
      borderColor: lightBlue[900],
    },
    fieldset: {
      borderColor: blueGrey[400],
    },
    "&.Mui-focused fieldset": {
      //   color: `${theme.palette.primary.main}`,
    },
  },
}));
