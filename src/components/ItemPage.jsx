import React from "react";
import { useParams } from "react-router-dom";
import groot from "../images/groot.jpg";
import PaypalBox from "./PaypalBox";

function ItemPage() {
  let { itemId } = useParams();
  return (
    <div className="about">
      <div className="container">
        <div className="row" style={{ margin: "10px" }}>
          <div className="col">
            <h3>Groot</h3>
            <img src={groot} width="100%" />
            <p>Groot is so freaking cute man</p>
          </div>
          <div className="col">
            <h3>$19.99</h3>
            <div>
              <PaypalBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
