import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import NavbarWapper from "./components/shared/NavbarWapper/UI/NavbarWapper.jsx";
import { DarkThemeProvider } from "./components/DarkTheme/Context/ThemeContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </Provider>
  // </React.StrictMode>
);
