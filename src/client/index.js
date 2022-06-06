import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./components/Footer/footer.css";
// import "./components/Header/header.css";
// import "./components/Main/formCreateNewMeal.css";
// import "./components/Main/mealsPage.css";
// import "./components/Main/mealWithId.css";
// import "./components/Pages/blog.css";
// import "./components/Pages/homePage.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
