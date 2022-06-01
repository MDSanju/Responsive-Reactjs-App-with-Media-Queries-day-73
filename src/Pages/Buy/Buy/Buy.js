import React from "react";
import { useParams } from "react-router";

const Buy = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>this is buy now page!</h2>
      <p>Your_ID: {serviceId}</p>
    </div>
  );
};

export default Buy;
