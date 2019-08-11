import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import "./MainPage.css";
import axios from "axios";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      firstOptions: [],
      secondOptions: [],
      cheatSheets: [],
      cheatSheet: null,
      currentOption: "",
      currentSecondOption: null,
      currentCheatSheet: null,
      showSecondOption: false
    };
    this.fetchFirstOption = this.fetchFirstOption.bind(this);
    this.fetchSecondOption = this.fetchSecondOption.bind(this);
    this.fetchCheatSheets = this.fetchCheatSheets.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showCheatSheet = this.showCheatSheet.bind(this);
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

  handleChange(currentOption) {
    this.setState({
      currentOption: this.state.firstOptions.find(
        firstOption => firstOption.value === currentOption
      )
    });
    const objectCurrentOption = this.state.firstOptions.filter(
      firstOption => firstOption.value === currentOption
    );
    if (objectCurrentOption[0].hasSecondOption === 1) {
      const secondOptionsArray = this.state.secondOptions.filter(
        secondOption => secondOption.firstOptionId === objectCurrentOption[0].id
      );

      this.setState({
        showSecondOption: true,
        secondOptionsToShow: secondOptionsArray
      });
    } else if (objectCurrentOption[0].hasSecondOption === 0) {
      this.setState({
        showSecondOption: false
      });
      this.showCheatSheet(
        this.state.currentOption,
        this.state.currentSecondOption
      );
    }
  }

  handleChangeSecondOption(currentSecondOption) {
    this.setState({
      currentSecondOption: this.state.secondOptions.find(
        secondOption => secondOption.value === currentSecondOption
      )
    });
  }

  showCheatSheet(firstOption, secondOption) {
    console.log(firstOption);
    if (this.state.currentOption.hasSecondOption === 0) {
      const cheatSheetSelected = this.state.cheatSheets.find(
        cheatSheet => cheatSheet.firstOptionId === firstOption.id
      );
    }
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
                  onChange={event => this.handleChange(event.target.value)}
                >
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
                    {this.state.secondOptions &&
                      this.state.secondOptionsToShow.map(secondOption => {
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
                <p className="usage ml-3 mb-0">{"git commit -m <message>"}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
