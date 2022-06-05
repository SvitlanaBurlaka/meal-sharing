import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import { Meals } from "./components/Main/Meals";
import { MealWithId } from "./components/Main/MealWithId";
import { Blog } from "./components/Pages/Blog";
import { MealsProvider } from "./components/MealsContext";
import { Home } from "./components/Pages/Home";
import { NotFoundPage } from "./components/Pages/NotFoundPage";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <MealsProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/meals">
            <Meals />
          </Route>
          <Route path="/meals/:id">
            <MealWithId />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </MealsProvider>
    </Router>
  );
}

export default App;
