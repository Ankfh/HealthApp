// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./Config/routes/routes";
import PrivateRoute from "./customRoute/PrivateRoutes/PrivateRoutes";
import PublicRoute from "./customRoute/PublicRoutes/PublicRoutes";
import SingUpContainer from "./components/SignUP/container/SingUpContainer";
import NavbarWapper from "./components/shared/NavbarWapper/UI/NavbarWapper";
import HomeContainer from "./components/Home/container/HomeContainer";
import LoginContainer from "./components/Login/container/LoginContainer";
import { CssProvider } from "./components/CssContext/context/CssContex";
import BlogContainer from "./components/Blog/Container/BlogContainer";
import ServicesContainer from "./components/servicesTab/container/ServicesContainer";
import TeamContainer from "./components/Team/Container/TeamContainer";
import AboutContainer from "./components/About/container/AboutContainer";
import PersonalDetailContainer from "./components/PersonalDetail/Container/PersonalDetail";
import BlogContianer from "./components/BlogDetail/container/BlogContianer";

const App = () => {
  const userid = localStorage.getItem("user_id");
  const [authenticated, setAuthenticated] = useState(userid ? true : false);

  return (
    <Router>
      <CssProvider>
        <NavbarWapper>
          <Routes>
            {/* <Route element={<PrivateRoute />}> */}
            <Route path="/nmnm" element={<HomeContainer />} />
            <Route path="/" element={<PersonalDetailContainer />} />
            <Route path="/blogdetail/:id" element={<BlogContianer />} />
            <Route path="/service/:id" element={<ServiceDetails />} />

            {/* </Route> */}
            {/* <Route element={<PublicRoute />}> */}
            <Route path="/about" element={<AboutContainer />} />
            <Route path="/blog" element={<BlogContainer />} />
            <Route path="/team" element={<TeamContainer />} />
            <Route path="/services" element={<ServicesContainer />} />
            <Route path="/signup" element={<SingUpContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            {/* </Route> */}
          </Routes>
        </NavbarWapper>
      </CssProvider>
    </Router>
  );
};

export default App;
