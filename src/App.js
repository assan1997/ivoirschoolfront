import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Components/access/SignUp";
import SchoolDashBoard from "./Components/main/SchoolDashBoard";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <SignUp />}></Route>
          <Route
            exact
            path="/schooldash"
            render={() => <SchoolDashBoard />}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
