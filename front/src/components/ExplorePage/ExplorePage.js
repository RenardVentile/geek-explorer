import React, { Component } from "react";
import "./ExplorePage.css";
import { Container, Row, Col } from "reactstrap";

import ExploreForm from "./ExploreForm";
import ExploreCheatSheet from "./ExploreCheatSheet";

function ExplorePage({
  handleChangeFirstOption,
  handleChangeSecondOption,
  state
}) {
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
        <ExploreForm
          handleChangeFirstOption={handleChangeFirstOption}
          handleChangeSecondOption={handleChangeSecondOption}
          state={state}
        />

        <ExploreCheatSheet
          currentCheatSheet={state.currentCheatSheet}
          showDetail={state.showDetail}
        />
      </Row>
    </Container>
  );
}

export default ExplorePage;
