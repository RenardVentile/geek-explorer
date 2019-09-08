import React from "react";
import { Col } from "reactstrap";

const ExploreCheatSheet = ({ showDetail, currentCheatSheet }) => {
  return (
    <Col lg="6" sm="10" className="mt-3 offset-1">
      <div>
        <h2 className="h2">Usage</h2>
        <div className="usageContainer d-flex align-items-center">
          <p className="usage ml-3 mb-0">
            {currentCheatSheet && currentCheatSheet.value}
          </p>
        </div>
      </div>

      {showDetail && currentCheatSheet.details !== null && (
        <div>
          <h2 className="h2 mt-4">Note</h2>
          <div className="detailContainer pt-3">
            <p className="usage ml-3 mb-0">
              {currentCheatSheet && currentCheatSheet.details}
            </p>
          </div>
        </div>
      )}
    </Col>
  );
};

export default ExploreCheatSheet;
