import React, { Component } from "react";
import "./App.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import ClickOutside from "react-click-outside";
import { Route } from "react-router-dom";
import SideNav, {
  NavItem,
  NavIcon,
  NavText,
  Toggle,
  Nav
} from "@trendmicro/react-sidenav";

import ExplorePage from "./components/ExplorePage";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location, history }) => (
          <>
            <ClickOutside
              onClickOutside={() => {
                this.setState({ expanded: false });
              }}
            >
              <SideNav
                style={{ background: "Lavender" }}
                onSelect={selected => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <Toggle />

                <Nav>
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className="fas fa-home"
                        style={{
                          fontSize: "2em",
                          color: "#20252d",
                          paddingTop: "0.4em"
                        }}
                      />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="explore/unix">
                    <NavIcon>
                      <i
                        className="fas fa-terminal"
                        style={{
                          fontSize: "2em",
                          color: "#20252d",
                          paddingTop: "0.4em"
                        }}
                      />
                    </NavIcon>
                    <NavText>Unix</NavText>
                  </NavItem>
                  <NavItem eventKey="explore/pc-shortcuts">
                    <NavIcon>
                      <i
                        className="fas fa-laptop"
                        style={{
                          fontSize: "2em",
                          color: "#20252d",
                          paddingTop: "0.4em"
                        }}
                      />
                    </NavIcon>
                    <NavText>PC shortcuts</NavText>
                  </NavItem>
                </Nav>
              </SideNav>
            </ClickOutside>
            <main>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/explore/:category" component={ExplorePage} />
            </main>
          </>
        )}
      />
    );
  }
}

export default App;
