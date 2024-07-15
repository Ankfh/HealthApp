import HomeContainer from "../../components/Home/container/HomeContainer";
import LoginContainer from "../../components/Login/container/LoginContainer";
import SingUpContainer from "../../components/SignUP/container/SingUpContainer";
const routes = [
  { path: "/signup", component: SingUpContainer, isPrivate: false },
  { path: "/login", component: LoginContainer, isPrivate: false },
  { path: "/", component: HomeContainer, isPrivate: true },
  // Add more route configurations as needed
];

export default routes;
