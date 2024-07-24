import React from "react";
import SharedLink from "./SharedLink";

const LinkView = (props) => {
  const menu = ["HOME", "ABOUT", "BLOG", "SERVICES", "TEAM", "COMMUNITY"];

  return (
    <div className="ml-[200px] md:flex space-x-1">
      {menu.map((item, index) => (
        <SharedLink
          key={index}
          menu={item}
          isLoggedIn={props.isLoggedIn}
          setIsLoggedIn={props.setIsLoggedIn}
          selectedTab={props.selectedTab}
          setSelectedTab={props.setSelectedTab}
          {...props}
        />
      ))}
    </div>
  );
};

export default LinkView;
