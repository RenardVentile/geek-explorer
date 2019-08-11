import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import "./MainPage.css";
import axios from "axios";

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      firstOptions: null,
      secondOption: null,
      cheatSheet: null
    }
    this.fetchFirstOption = this.fetchFirstOption.bind(this);
  }

  fetchFirstOption() {
    axios.get("/api/first-options")
      .then(response => response.data)
      .then(firstOptions => this.setState({ firstOptions }))
  }

  componentDidMount() {
    this.fetchFirstOption();
  }

  render() {
    return (
      <Container>

        <Row className="ml-3 mt-5">
          <Col lg="11" className="mt-4 offset-1">
            <h1 className="h1"><span className="titleColor">Geek</span> Explorer</h1>
          </Col>
        </Row>

        <Row className="ml-3 mt-5">
          <Col lg="4" sm="10" className="mt-4 offset-1">
            <div className="">
              <h2 className="h2">Unix explorer</h2>
              <p className="">Welcome dude, want some unix's stuff ?
                Here you can find THE command you need !
                You're welcome. :')</p>
              <FormGroup>
                <Label for="exampleSelect" className="mt-4 search">I want to :</Label>
                <Input type="select" name="select" id="exampleSelect">
                  {
                    this.state.firstOptions && this.state.firstOptions.map(firstOption => {
                      return (
                        <option key={firstOption.id}>{firstOption.value}</option>
                      )
                    })
                  }
                </Input>
              </FormGroup>
            </div>
          </Col>

          <Col lg="6" sm="10" className="mt-4 offset-1">
            <div className="">
              <h2 className="h2">Usage</h2>
              <div className="usageContainer d-flex align-items-center">
                <p className="usage ml-3 mb-0" >{"git commit -m <message>"}</p>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default MainPage;
