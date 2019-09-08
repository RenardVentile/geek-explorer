import React, { Component } from "react";
import "./App.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Route } from "react-router-dom";
import SideNav, {
  NavItem,
  NavIcon,
  NavText,
  Toggle,
  Nav
} from "@trendmicro/react-sidenav";

import FacebookLogin from "react-facebook-login";

import ExploreContainer from "./containers/ExploreContainer";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    return (
      <Route
        render={({ location, history }) => (
          <>
            <FacebookLogin
              appId="915447162166334"
              fields="name,email,picture"
              callback={responseFacebook}
            />
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
            <main>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/explore/:category" component={ExploreContainer} />
            </main>
          </>
        )}
      />
    );
  }
}

export default App;
