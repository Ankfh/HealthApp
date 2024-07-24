import React, { useState } from "react";
import LogoUI from "./LogoUI";
import Logout from "./Logout";
import { useCssContext } from "../../CssContext/context/CssContex";
import LinkView from "./LinkView";
import JoinUs from "./JoinUs";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";
import ProfileIcon from "./ProfileIcon";

const Navbar = (props) => {
  const { color } = useCssContext();
  const { isLoggedIn, setisLoggedIn } = useGlobalState();

  return (
    <div className="fixed w-full z-[99]">
      <div className="h-[60px] shadow-[0px_1px_0px_0px_orange] bg-[#f95700] flex justify-end items-center pl-50">
        <div className="flex ml-1 w-full">
          <LogoUI capital={props.capital} />
        </div>
        <LinkView
          {...props}
          selectedTab={props.selectedTab}
          setSelectedTab={props.setselectedTab}
        />
        <div className="flex justify-center w-full">
          <JoinUs {...props} />
        </div>
        <div>
          <Logout
            logoutClick={props.logoutClick}
            isLoggedIn={isLoggedIn}
            setisLoggedIn={setisLoggedIn}
            bgColor={color.button_bg}
          />
        </div>
        {props.nameFirst ? (
          <div
            className="cursor-pointer"
            onClick={() => props.navigate("/profile")}
          >
            {" "}
            <ProfileIcon {...props} />{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
