import React from "react";

const Expert = (props) => {
  const { name, img, description, price } = props.expert;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 g-3">
      <img src={img} alt="" />
      <h4 className="mt-3">{name}</h4>
      <small>Price: {price}</small>
      <p>{description}</p>
    </div>
  );
};

export default Expert;
