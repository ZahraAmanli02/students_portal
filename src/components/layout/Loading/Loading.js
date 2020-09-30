import React from "react";

const loading = () => {
  return (
    <div className="loading">
      <div
        className="spinner-border text-danger "
        role="status"
        style={{ width: "150px", height: "150px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default loading;