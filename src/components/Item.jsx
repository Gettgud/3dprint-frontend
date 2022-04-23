import React from "react";
import PropTypes from "prop-types";

function Item({ name, img, imgAlt, description, itemWidth, itemHeight }) {
  return (
    <div className="card" style={{ marginBottom: "5px", width: itemWidth }}>
      <img
        className="card-img-top"
        src={img}
        alt={imgAlt}
        style={{ width: itemWidth, height: itemHeight }}
      />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        {description !== null ? (
          <p className="card-text">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  description: PropTypes.string,
  itemWidth: PropTypes.string,
};

export default Item;
