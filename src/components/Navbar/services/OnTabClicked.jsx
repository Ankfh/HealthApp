const OnTabClicked = (setSelectedTab, navigate, tabName) => {
  const changeTab = (route) => {
    setSelectedTab(tabName);
    const isExternalLink =
      route.startsWith("http://") || route.startsWith("https://");
    if (isExternalLink) {
      window.location.href = route;
    } else {
      navigate(route);
    }
  };

  switch (tabName) {
    case "HOME":
      changeTab("/");
      break;
    case "ABOUT":
      changeTab("/about");
      break;
    case "BLOG":
      changeTab("/blog");
      break;
    case "SERVICES":
      changeTab("/services");
      break;
    case "TEAM":
      changeTab("/team");
      break;
    case "COMMUNITY":
      changeTab("https://www.facebook.com/MindfullivingClub?mibextid=JRoKGi");
      break;
    case "LOGIN":
      changeTab("/login");
      break;
    case "MYACCOUNT":
      changeTab("/appointment");
      break;
    default:
      break;
  }
};

export default OnTabClicked;
