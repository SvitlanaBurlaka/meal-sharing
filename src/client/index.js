import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./components/Footer/Footer.css";
import "./components/Header/Header.css";
import "./components/Main/FormCreateNewMeal.css";
import "./components/Main/MealsPage.css";
import "./components/Main/MealWithId.css";
import "./components/Pages/MainBlog.css";
import "./components/Pages/HomePage.css";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
