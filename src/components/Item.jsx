import React from "react";
import printer from "../images/printer.png"
import PropTypes from "prop-types"

function Item({name, img, description}) {
  return (
    <div className="card" style={{width: "400px"}}>
        <img className="card-img-top" src={img} alt="image"/>
        <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
        </div>
    </div>
  );
} 

Item.propTypes= 
{   
    name: PropTypes.string, 
    img: PropTypes.string, 
    description: PropTypes.string,
}

export default Item;