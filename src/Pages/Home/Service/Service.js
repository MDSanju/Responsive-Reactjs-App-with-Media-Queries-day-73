import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, img, price, description } = props.service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <p className="fw-bold fs-4 mt-3">{name}</p>
      <p>Price: {price}</p>
      <p>{description}</p>
      <Link to={`/buy/${id}`}>
        <button class="btn btn-light">Buy {name.toLowerCase()}</button>
      </Link>
    </div>
  );
};

export default Service;
