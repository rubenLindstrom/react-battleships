import React from "react";
import PropTypes from "prop-types";

const box = ({ value, onClick }) => {
  return <div onClick={onClick} className={`box ${value}`}></div>;
};

box.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default box;
