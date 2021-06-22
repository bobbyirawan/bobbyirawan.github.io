import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import { Navbar } from "./components";
import GlobalStyle from "./GlobalStyle";
import Certificate from "./pages/Certificate";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/certificate" component={Certificate} />
        <Route path="/skills" component={Skills} />
        {/* <Route path="/Dashboard" > <Protected cmp={Dashboard} /> </Route>
        <Route path="/sign-up" component={SignUp} /> */}

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
