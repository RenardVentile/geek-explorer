import React from "react";
import "./ExplorePage.css";
import { startCase } from "lodash";
import { Container, Row, Col } from "reactstrap";

import ExploreForm from "./ExploreForm";
import ExploreCheatSheet from "./ExploreCheatSheet";

function ExplorePage({
  handleChangeFirstOption,
  handleChangeSecondOption,
  state,
  category
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
        <Col lg="4" sm="10" className="mt-4 offset-1">
          <h2 className="h2">{startCase(category)}</h2>
          <ExploreForm
            handleChangeFirstOption={handleChangeFirstOption}
            handleChangeSecondOption={handleChangeSecondOption}
            state={state}
            category={category}
          />
        </Col>

        <Col lg="6" sm="10" className="mt-3 offset-1">
          <ExploreCheatSheet
            currentCheatSheet={state.currentCheatSheet}
            showDetail={state.showDetail}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ExplorePage;
