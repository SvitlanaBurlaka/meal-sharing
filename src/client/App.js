import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Header from "./components/Main/Header";
import { Meals } from "./components/Main/Meals";
import { MealWithId } from "./components/Main/MealWithId";
import { About } from "./components/NavigationBar/About";
import { Blog } from "./components/NavigationBar/Blog";
import { Contact } from "./components/NavigationBar/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/meals">
        <Meals />
      </Route>
      <Route path="/meals/:id">
        <MealWithId />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      {/* <Route exact path="/home">
        <Home />
      </Route> */}
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
