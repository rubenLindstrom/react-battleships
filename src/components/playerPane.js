import React from "react";
import PropTypes from "prop-types";

const playerPane = ({ name, hits, shots, isCurrent }) => {
  return (
    <div className="playerPane">
      <h2>{name}</h2>
      <hr />
      <p>Träffar: {hits}</p>
      <p>Skott: {shots}</p>
      {isCurrent && <p>My turn!! :)</p>}
    </div>
  );
};

playerPane.propTypes = {
  name: PropTypes.string.isRequired,
  hits: PropTypes.number.isRequired,
  shots: PropTypes.number.isRequired,
  isCurrent: PropTypes.bool.isRequired
};

export default playerPane;
