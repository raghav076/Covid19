import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./container/Home";
import About from "./container/About";
import Contact from "./container/Contact";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
