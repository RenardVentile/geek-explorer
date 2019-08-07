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
              style={{ background: "black" }}
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
                  <NavIcon style={{ color: "white" }}>
                    <i
                      className="fab fa-linux"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Unix</NavText>
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
