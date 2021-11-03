import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import SideMenu from "./components/SideMenu";
import "./App.css";

function App() {
  const [inactive, setInactive] = React.useState(false);

  return (
    <Router>
      <SideMenu
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />
      <div className={`global-container ${inactive ? "inactive" : ""}`}>
        <Switch>
          <Route exact path="/">
            <span className="headers">Home</span>
          </Route>
          <Route path="/actions">
            <span className="headers">Actions</span>
          </Route>
          <Route path="/analytics">
            <span className="headers">Analytics</span>
          </Route>
          <Route path="/contact">
            <span className="headers">Contact</span>
          </Route>
          <Route path="/notifications">
            <span className="headers">Notification</span>
          </Route>
          <Route exact path="/overview">
            <span className="headers">Overview</span>
          </Route>
          <Route path="/overview/charts">
            <span className="headers">Charts</span>
          </Route>
          <Route path="/overview/tickets">
            <span className="headers">Tickets</span>
          </Route>
          <Route path="/plant">
            <span className="headers">plant</span>
          </Route>
          <Route path="/predictive">
            <span className="headers">Predictive</span>
          </Route>
          <Route path="/settings">
            <span className="headers">Settings</span>
          </Route>
          <Route path="/users">
            <span className="headers">Users</span>
          </Route>
          <Route path="/user/:id">
            <span className="headers">User</span>
          </Route>
          <Route path="/documentation">
            <span className="headers">Documentation</span>
          </Route>
          <Route path="/data">
            <span className="headers">Data</span>
          </Route>
          <Route path="/schedule">
            <span className="headers">Schedule</span>
          </Route>

          <Route path="/sensors/:id">
            <span className="headers">Sensor</span>
          </Route>
          <Route path="/advisor/:id">
            <span className="headers">Advisor</span>
          </Route>
          <Route path="/plants/:id">
            <span className="headers">Plant X</span>
          </Route>
          <Route path="/plant-scheme/:id">
            <span className="headers">Scheme id</span>
          </Route>
          <Route path="/plants-assets/:id/:id">
            <span className="headers"></span>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
