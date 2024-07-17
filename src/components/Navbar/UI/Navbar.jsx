import { Switch } from "@mui/material";
import React from "react";
import LogoUI from "./LogoUI";
import Logout from "./Logout";
import { useCssContext } from "../../CssContext/context/CssContex";
import LinkView from "./LinkView";

const Navbar = (props) => {
  const { color } = useCssContext();

  return (
    <div className="  fixed w-full z-[99]">
      <div
        className={
          " h-10 shadow-[0px_1px_0px_0px_blue] bg-[#3d928a] flex justify-center items-center"
        }
      >
        <div className="flex ml-1 w-full ">
          <LogoUI capital={props.capital} />
        </div>
        <LinkView {...props} />
        <div className="flex justify-end w-full">
        
        </div>
        {props.capital && (
          <div>
            <Logout {...props} bgColor={color.button_bg} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
