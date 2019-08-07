import React, { Component } from "react";
import "./App.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import UnixPage from "./components/UnixPage";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              style={{ background: "lightgrey" }}
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="">
                  <NavIcon>
                    <i
                      className="fab fa-linux"
                      style={{ fontSize: "1.75em", color: "black" }}
                    />
                  </NavIcon>
                  <NavText style={{ color: "white" }}>Unix</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route path="/" exact component={UnixPage} />
            </main>
          </React.Fragment>
        )}
      />
    );
  }
}

export default App;
