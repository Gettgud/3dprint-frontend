import React from "react";
import PropTypes from "prop-types"

function Item({name, img, imgAlt, description, itemWidth, }) {
  return (
    <div className="card" style={{width: itemWidth, marginBottom: "5px"}}>
        <img className="card-img-top" src={img} alt={imgAlt}/>
        <div className="card-body">
        <h4 className="card-title">{name}</h4>
        { description !== null ? <p className="card-text">{description}</p> : null }
        </div>
    </div>
  );
} 

Item.propTypes= 
{   
    name: PropTypes.string, 
    img: PropTypes.string, 
    imgAlt: PropTypes.string,
    description: PropTypes.string,
    itemWidth: PropTypes.string,
}

export default Item;