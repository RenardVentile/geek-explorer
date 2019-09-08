import React from "react";

const ExploreCheatSheet = ({ showDetail, currentCheatSheet }) => {
  return (
    <>
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
    </>
  );
};

export default ExploreCheatSheet;
