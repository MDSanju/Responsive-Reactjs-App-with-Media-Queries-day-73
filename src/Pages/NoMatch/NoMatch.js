import React from "react";
import { useHistory } from "react-router";

const NoMatch = () => {
  const goBackHome = useHistory();

  const handleGoBack = () => {
    goBackHome.push("/home");
  };
  return (
    <div className="mt-5">
      <h1 style={{ color: "gray", fontSize: "55px", fontWeight: "800" }}>
        404 Error
      </h1>
      <h3>Page not found!</h3>
      <br />
      <br />
      <button onClick={handleGoBack} className="btn btn-dark">
        GO BACK
      </button>
    </div>
  );
};

export default NoMatch;
