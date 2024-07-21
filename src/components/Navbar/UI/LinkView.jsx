import React from "react";
import SharedLink from "./SharedLink";

const LinkView = (props) => {
  const menu = ["HOME", "ABOUT", "BLOG", "SERVICES", "TEAM", "COMMUNITY"];
  return (
    <div className="  md:flex  space-x-1">
      {menu.map((item, index) => (
        <SharedLink key={index} menu={item} {...props} />
      ))}
    </div>
  );
};

export default LinkView;
