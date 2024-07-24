import React from "react";
import MuiButton from "../../shared/Button/UI/MuiButton";

const Logout = (props) => {
  return (
    <div>
      <MuiButton
        variant="contained"
        type="text"
        title={props.isLoggedIn?"LogOut":'LogIn'}
        size={"small"}
        onClick={props.logoutClick}
        bgColor={props.bgColor}
      />
    </div>
  );
};

export default Logout;
