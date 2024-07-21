import React from "react";
import MuiButton from "../../shared/Button/UI/MuiButton";

const JoinUs = (props) => {
  return (
    <div>
      <MuiButton
        variant="contained"
        type="button"
        title={"JOIN US"}
        size={"small"}
        onClick={props.buttonClick}
      />
    </div>
  );
};

export default JoinUs;
