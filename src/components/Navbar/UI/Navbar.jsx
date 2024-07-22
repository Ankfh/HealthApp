import React, { useState } from "react";
import LogoUI from "./LogoUI";
import Logout from "./Logout";
import { useCssContext } from "../../CssContext/context/CssContex";
import LinkView from "./LinkView";
import JoinUs from "./JoinUs";

const Navbar = (props) => {
  const { color } = useCssContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedTab(""); // Optionally, reset the selected tab
  };

  return (
    <div className="fixed w-full z-[99]">
      <div className="h-[60px] shadow-[0px_1px_0px_0px_orange] bg-[#f95700] flex justify-end items-center pl-50">
        <div className="flex ml-1 w-full">
          <LogoUI capital={props.capital} />
        </div>
        <LinkView
          {...props}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="flex justify-center w-full">
          <JoinUs {...props} />
        </div>
        {isLoggedIn && (
          <div>
            <Logout logoutClick={handleLogout} bgColor={color.button_bg} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
