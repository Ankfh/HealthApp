const OnTabClicked = (setSelectedTab, navigate, tabName) => {
    const changeTab = (route) => {
        setSelectedTab(tabName);
        navigate(route);
    };

    switch (tabName) {
        case "HOME":
            changeTab('/');
            break;
        case "ABOUT":
            changeTab('/about');
            break;
        case "BLOG":
            changeTab('/blog');
            break;
        case "SERVICES":
            changeTab('/services');
            break;
        case "TEAM":
            changeTab('/team');
            break;
        case "COMMUNITY":
            changeTab('/community');
            break;
        default:
            break;
    }
};

export default OnTabClicked;
