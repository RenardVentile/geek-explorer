import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import "./MainPage.css";
import axios from "axios";

class ExplorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      firstOptions: [],
      secondOptions: [],
      cheatSheets: [],
      currentFirstOption: null,
      currentSecondOption: null,
      currentCheatSheet: null,
      showSecondOption: false
    };
    this.fetchFirstOption = this.fetchFirstOption.bind(this);
    this.fetchSecondOption = this.fetchSecondOption.bind(this);
    this.fetchCheatSheets = this.fetchCheatSheets.bind(this);
    this.handleChangeFirstOption = this.handleChangeFirstOption.bind(this);
    this.handleChangeSecondOption = this.handleChangeSecondOption.bind(this);
  }

  fetchFirstOption() {
    axios
      .get("/api/first-options")
      .then(response => response.data)
      .then(firstOptions => this.setState({ firstOptions }));
  }

  fetchSecondOption() {
    axios
      .get("/api/second-options")
      .then(response => response.data)
      .then(secondOptions => this.setState({ secondOptions }));
  }

  fetchCheatSheets() {
    axios
      .get("/api/cheat-sheets")
      .then(response => response.data)
      .then(cheatSheets => this.setState({ cheatSheets }));
  }

  componentDidMount() {
    this.fetchFirstOption();
    this.fetchSecondOption();
    this.fetchCheatSheets();
  }

  handleChangeFirstOption(currentValue) {
    if (this.state.currentCheatSheet !== null) {
      this.setState({
        currentCheatSheet: {}
      });
    }
    const currentFirstOption = this.state.firstOptions.find(
      firstOption => firstOption.value === currentValue
    );

    this.setState({
      currentFirstOption
    });

    if (currentFirstOption.hasSecondOption === 1) {
      this.setState({
        showSecondOption: true
      });
    } else if (currentFirstOption.hasSecondOption === 0) {
      const currentCheatSheet = this.state.cheatSheets.find(
        cheatsheet => cheatsheet.firstOptionId === currentFirstOption.id
      );
      this.setState({
        showSecondOption: false,
        currentCheatSheet
      });
    }
  }

  handleChangeSecondOption(currentValue) {
    const currentSecondOption = this.state.secondOptions.find(
      secondOption => secondOption.value === currentValue
    );
    const currentCheatSheet = this.state.cheatSheets.find(
      cheatsheet => cheatsheet.secondOptionId === currentSecondOption.id
    );
    this.setState({
      currentSecondOption,
      currentCheatSheet
    });
  }

  render() {
    return (
      <Container>
        <Row className="ml-3 mt-5">
          <Col lg="11" className="mt-4 offset-1">
            <h1 className="h1">
              <span className="titleColor">Geek</span> Explorer
            </h1>
          </Col>
        </Row>

        <Row className="ml-3 mt-5">
          <Col lg="4" sm="10" className="mt-4 offset-1">
            <div className="">
              <h2 className="h2">Unix explorer</h2>
              <p className="">
                Welcome dude, want some unix's stuff ? Here you can find THE
                command you need ! You're welcome. :')
              </p>
              <FormGroup>
                <Label for="exampleSelect" className="mt-4 search">
                  I want to :
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={event =>
                    this.handleChangeFirstOption(event.target.value)
                  }
                >
                  <option hidden>...</option>
                  {this.state.firstOptions &&
                    this.state.firstOptions.map(firstOption => {
                      return (
                        <option key={firstOption.id}>
                          {firstOption.value}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>

              {this.state.showSecondOption && (
                <FormGroup>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={event =>
                      this.handleChangeSecondOption(event.target.value)
                    }
                  >
                    <option hidden>...</option>
                    {this.state.secondOptions &&
                      this.state.secondOptions
                        .filter(
                          secondOption =>
                            secondOption.firstOptionId ===
                            this.state.currentFirstOption.id
                        )
                        .map(secondOption => {
                          return (
                            <option key={secondOption.id}>
                              {secondOption.value}
                            </option>
                          );
                        })}
                  </Input>
                </FormGroup>
              )}
            </div>
          </Col>

          <Col lg="6" sm="10" className="mt-4 offset-1">
            <div className="">
              <h2 className="h2">Usage</h2>
              <div className="usageContainer d-flex align-items-center">
                <p className="usage ml-3 mb-0">
                  {this.state.currentCheatSheet &&
                    this.state.currentCheatSheet.value}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ExplorePage;
