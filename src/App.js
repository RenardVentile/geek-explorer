import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import UnixPage from './components/UnixPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                style={{ background: 'black' }}
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
                        className="fa fa-fw fa-home"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="page1">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-pencil-ruler"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Graphisme</NavText>
                  </NavItem>
                  <NavItem eventKey="page2">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-font"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Typographie</NavText>
                  </NavItem>
                  <NavItem eventKey="page2">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-pencil-alt"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Illustration</NavText>
                  </NavItem>
                  <NavItem eventKey="page2">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-camera"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Photographie</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/" exact component={UnixPage} />
              </main>
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}

export default App;