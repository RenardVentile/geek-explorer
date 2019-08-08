import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import "./MainPage.css";

class MainPage extends Component {

  render() {
    return (
      <Container>

        <Row className="ml-3 mt-5">
          <Col lg="11" className="offset-1">
            <h1 className="h1">Geek Explorer</h1>
          </Col>
        </Row>

        <Row className="ml-3 mt-5">
          <Col lg="4" sm="10" className="offset-1">
            <div className="">
              <h2 className="h3">Unix command explorer</h2>
              <p className="">Welcome dude, want some unix's shit ?</p>
              <p className=""> here you can find THE command you need ! You're welcome. :')</p>

              <FormGroup>
                <Label for="exampleSelect">I want to:</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </FormGroup>
            </div>
          </Col>

          <Col lg="6" sm="10" className="offset-1">
            <div className="">
              <h2 className="h3">Usage</h2>
              <div className="usage d-flex align-items-center">
                <p className="ml-3 mb-0 text-white" >Test</p>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default MainPage;
