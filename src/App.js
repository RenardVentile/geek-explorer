import React, { Component } from "react";
import "./App.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText, Toggle, Nav } from "@trendmicro/react-sidenav";

import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location, history }) => (
          <>
            <SideNav
              style={{ background: "lightgrey" }}
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <Toggle />
              <Nav defaultSelected="home">
                <NavItem eventKey="home">
                  <NavIcon>
                    <i
                      className="fab fa-linux"
                      style={{ fontSize: "1.75em", color: "black" }}
                    />
                  </NavIcon>
                  <NavText style={{ color: "white" }}>Unix</NavText>
                </NavItem>
              </Nav>
            </SideNav>
            <main>
              <Route path="/" exact component={MainPage} />
            </main>
          </>
        )}
      />
    );
  }
}

export default App;
